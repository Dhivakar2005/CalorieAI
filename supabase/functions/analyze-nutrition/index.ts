import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get('NUTRITION_WEBHOOK_URL');
    
    if (!webhookUrl) {
      console.error('NUTRITION_WEBHOOK_URL is not configured');
      throw new Error('Webhook URL is not configured');
    }

    const { image, filename, mimeType } = await req.json();

    if (!image) {
      throw new Error('No image data provided');
    }

    console.log(`Analyzing image: ${filename}, type: ${mimeType}`);

    // Forward the request to the webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image,
        filename,
        mimeType,
      }),
    });

    const responseText = await response.text();
    console.log(`Webhook response status: ${response.status}, body length: ${responseText.length}`);
    
    if (!response.ok) {
      console.error(`Webhook error: ${response.status} - ${responseText}`);
      throw new Error(`Webhook responded with status ${response.status}`);
    }

    if (!responseText || responseText.trim() === '') {
      console.error('Webhook returned empty response');
      throw new Error('Webhook returned empty response');
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error(`Failed to parse webhook response: ${responseText.substring(0, 500)}`);
      throw new Error('Invalid JSON response from webhook');
    }
    
    console.log('Webhook response parsed successfully');

    // Parse the response - handle various formats
    let nutritionData;
    
    if (Array.isArray(data) && data[0]?.output) {
      nutritionData = data[0].output;
    } else if (data.output) {
      nutritionData = data.output;
    } else if (data.status && data.food && data.total) {
      nutritionData = data;
    } else {
      console.error('Unexpected response format:', JSON.stringify(data));
      throw new Error('Invalid response format from webhook');
    }

    return new Response(JSON.stringify(nutritionData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    console.error('Error in analyze-nutrition function:', errorMessage);
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        status: 'error'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

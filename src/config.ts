/**
 * Application Configuration
 * 
 * Edit these values to switch between development and production endpoints.
 * 
 * IMPORTANT: localhost URLs won't work from the Lovable preview!
 * Use a public URL (ngrok, deployed server, etc.) instead.
 */

export const config = {
  /**
   * Webhook URL for the nutrition analysis API
   * 
   * To use your local n8n:
   * 1. Run: ngrok http 5678
   * 2. Copy the https URL (e.g., https://abc123.ngrok.io)
   * 3. Replace the URL below with: https://abc123.ngrok.io/webhook-test/ca457eba-0293-4f7f-a79d-9ac18ae2e605
   */
  NUTRITION_WEBHOOK_URL: "http://localhost:5678/webhook-test/ca457eba-0293-4f7f-a79d-9ac18ae2e605",
  
  /**
   * API request timeout in milliseconds
   */
  API_TIMEOUT: 30000,
} as const;

export type Config = typeof config;

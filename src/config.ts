/**
 * Application Configuration
 * 
 * Edit these values to switch between development and production endpoints.
 */

export const config = {
  /**
   * Webhook URL for the nutrition analysis API
   * 
   * Development: Your local n8n webhook
   * Production: Your deployed webhook endpoint
   */
  NUTRITION_WEBHOOK_URL: "http://localhost:5678/webhook-test/ca457eba-0293-4f7f-a79d-9ac18ae2e605",
  
  /**
   * API request timeout in milliseconds
   */
  API_TIMEOUT: 30000,
} as const;

export type Config = typeof config;

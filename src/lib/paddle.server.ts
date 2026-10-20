export type PaddleEnv = "sandbox" | "live";

const GATEWAY_BASE_URL = "https://connector-gateway.lovable.dev/paddle";

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is not configured`);
  return value;
};

export async function gatewayFetch(env: PaddleEnv, path: string, init?: RequestInit): Promise<Response> {
  const connectionApiKey = env === "sandbox" ? getEnv("PADDLE_SANDBOX_API_KEY") : getEnv("PADDLE_LIVE_API_KEY");
  return fetch(`${GATEWAY_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "X-Connection-Api-Key": connectionApiKey,
      "Lovable-API-Key": getEnv("LOVABLE_API_KEY"),
      ...init?.headers,
    },
  });
}

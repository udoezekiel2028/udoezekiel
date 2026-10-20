import { Environment, Paddle } from "@paddle/paddle-node-sdk";

export type PaddleEnv = "sandbox" | "live";

const GATEWAY_BASE_URL = "https://connector-gateway.lovable.dev/paddle";

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is not configured`);
  return value;
};

const connectionKey = (env: PaddleEnv) => (env === "sandbox" ? getEnv("PADDLE_SANDBOX_API_KEY") : getEnv("PADDLE_LIVE_API_KEY"));

export function getPaddleClient(env: PaddleEnv): Paddle {
  const key = connectionKey(env);
  return new Paddle(key, {
    environment: GATEWAY_BASE_URL as unknown as Environment,
    customHeaders: { "X-Connection-Api-Key": key, "Lovable-API-Key": getEnv("LOVABLE_API_KEY") },
  });
}

export async function gatewayFetch(env: PaddleEnv, path: string, init?: RequestInit): Promise<Response> {
  return fetch(`${GATEWAY_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "X-Connection-Api-Key": connectionKey(env),
      "Lovable-API-Key": getEnv("LOVABLE_API_KEY"),
      ...init?.headers,
    },
  });
}

export async function verifyWebhook(req: Request, env: PaddleEnv) {
  const signature = req.headers.get("paddle-signature");
  const body = await req.text();
  if (!signature || !body) throw new Error("Missing signature or body");
  const secret = env === "sandbox" ? getEnv("PAYMENTS_SANDBOX_WEBHOOK_SECRET") : getEnv("PAYMENTS_LIVE_WEBHOOK_SECRET");
  return await getPaddleClient(env).webhooks.unmarshal(body, secret, signature);
}

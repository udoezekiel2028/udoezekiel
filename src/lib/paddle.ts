import { resolvePaddlePrice } from "@/utils/payments.functions";

const clientToken = import.meta.env.VITE_PAYMENTS_CLIENT_TOKEN as string | undefined;

declare global {
  interface Window {
    Paddle: any;
  }
}

export function getPaddleEnvironment(): "sandbox" | "live" {
  return clientToken?.startsWith("test_") ? "sandbox" : "live";
}

let ready: Promise<void> | null = null;

export function initializePaddle() {
  if (ready) return ready;
  if (!clientToken) return Promise.reject(new Error("Payments are not configured"));
  ready = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.onload = () => {
      window.Paddle.Environment.set(getPaddleEnvironment() === "sandbox" ? "sandbox" : "production");
      window.Paddle.Initialize({ token: clientToken });
      resolve();
    };
    script.onerror = () => {
      ready = null;
      reject(new Error("Could not load checkout"));
    };
    document.head.appendChild(script);
  });
  return ready;
}

export function getPaddlePriceId(priceId: string): Promise<string> {
  return resolvePaddlePrice({ data: { priceId, environment: getPaddleEnvironment() } });
}

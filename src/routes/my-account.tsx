import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/my-account")({ component: Outlet });

import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes } from "react";

export function SiteLink({ href = "/", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith("/") && !href.startsWith("//")) {
    const path = href.length > 1 ? href.replace(/\/$/, "") : href;
    return <Link to={path} className={props.className ?? ""} rel={props.rel ?? ""} {...(props["aria-label"] ? { "aria-label": props["aria-label"] } : {})}>{children}</Link>;
  }
  return <a href={href} {...props}>{children}</a>;
}
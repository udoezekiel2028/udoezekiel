import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes } from "react";

export function SiteLink({ href = "/", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith("/") && !href.startsWith("//")) {
    return <Link to={href} className={props.className ?? ""} target={props.target ?? "_self"} rel={props.rel ?? ""} {...(props["aria-label"] ? { "aria-label": props["aria-label"] } : {})}>{children}</Link>;
  }
  return <a href={href} {...props}>{children}</a>;
}
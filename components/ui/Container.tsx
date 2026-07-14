import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** ظرف اصلی صفحه — max-width 1200px + پدینگ افقی 24px (DESIGN.md) */
export default function Container({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-site px-6", className)} {...rest} />;
}

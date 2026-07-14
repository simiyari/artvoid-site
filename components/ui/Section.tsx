import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** فاصله عمودی استاندارد بین بخش‌ها — 64px موبایل / 96px دسکتاپ (DESIGN.md) */
export default function Section({
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return <section className={cn("py-16 md:py-24", className)} {...rest} />;
}

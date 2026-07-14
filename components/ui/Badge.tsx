import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "neutral" | "outline" | "success" | "danger" | "warning";

// رنگ سمانتیک فقط برای وضعیت‌های سیستمی (قانون DESIGN.md)
const styles: Record<BadgeVariant, string> = {
  neutral: "bg-mist text-ink-soft",
  outline: "border border-gray-soft text-ink-soft",
  success: "bg-success/10 text-success",
  danger: "bg-danger/10 text-danger",
  warning: "bg-warning/10 text-warning",
};

export default function Badge({
  variant = "neutral",
  className,
  ...rest
}: HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm px-2.5 py-0.5 text-small font-medium",
        styles[variant],
        className,
      )}
      {...rest}
    />
  );
}

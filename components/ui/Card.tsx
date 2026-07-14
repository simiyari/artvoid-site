import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export default function Card({
  hover = false,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-md border border-gray-soft bg-white p-6 transition-colors duration-200",
        hover && "hover:border-gray-strong",
        className,
      )}
      {...rest}
    />
  );
}

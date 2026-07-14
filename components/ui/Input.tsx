import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const fieldBase =
  "w-full rounded-sm border bg-white text-body text-ink transition-colors duration-200 placeholder:text-gray";

export function fieldBorder(error?: string) {
  return error
    ? "border-danger"
    : "border-gray-soft hover:border-gray-strong focus:border-ink";
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  hint?: string;
};

export default function Input({
  label,
  error,
  hint,
  id,
  className,
  ...rest
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const messageId = error || hint ? `${inputId}-msg` : undefined;

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {label && (
        <label htmlFor={inputId} className="text-small font-medium text-ink-soft">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={messageId}
        className={cn(fieldBase, fieldBorder(error), "h-11 px-4")}
        {...rest}
      />
      {(error || hint) && (
        <p
          id={messageId}
          role={error ? "alert" : undefined}
          className={cn("text-small", error ? "text-danger" : "text-gray-strong")}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  );
}

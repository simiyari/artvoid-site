import { useId } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { fieldBase, fieldBorder } from "./Input";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  hint?: string;
};

export default function Textarea({
  label,
  error,
  hint,
  id,
  className,
  ...rest
}: TextareaProps) {
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
      <textarea
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={messageId}
        className={cn(fieldBase, fieldBorder(error), "min-h-32 resize-y px-4 py-3")}
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

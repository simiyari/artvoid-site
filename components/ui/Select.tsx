import { useId } from "react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { fieldBase, fieldBorder } from "./Input";
import { ChevronDownIcon } from "./icons";

export type SelectOption = { value: string; label: string };

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
};

export default function Select({
  label,
  error,
  hint,
  options,
  placeholder,
  id,
  className,
  defaultValue,
  ...rest
}: SelectProps) {
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
      <div className="relative">
        <select
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={messageId}
          defaultValue={defaultValue ?? (placeholder ? "" : undefined)}
          className={cn(fieldBase, fieldBorder(error), "h-11 appearance-none ps-4 pe-11")}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          size={18}
          className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-gray-strong"
        />
      </div>
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

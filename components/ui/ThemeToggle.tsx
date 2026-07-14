"use client";

import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* حالت private mode — ذخیره نشدن مهم نیست */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={site.themeToggleLabel}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-sm border border-gray-soft text-ink-soft transition-colors duration-200 hover:border-gray-strong hover:text-ink",
        className,
      )}
    >
      {/* سواپ آیکون با CSS تا اختلاف hydration پیش نیاید */}
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
    </button>
  );
}

"use client";

import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { MoonIcon, SunIcon } from "./icons";

const sizes = {
  /** هم‌قد دکمه sm — کنار دکمه‌های کوچک همین را به کار ببر */
  sm: "size-9",
  /** هم‌قد دکمه md و حداقل لمسی موبایل */
  md: "size-11",
} as const;

export default function ThemeToggle({
  className,
  size = "md",
}: {
  className?: string;
  size?: keyof typeof sizes;
}) {
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
        "inline-flex items-center justify-center rounded-sm border border-gray-soft text-ink-soft transition-colors duration-200 hover:border-gray-strong hover:text-ink",
        sizes[size],
        className,
      )}
    >
      {/* سواپ آیکون با CSS تا اختلاف hydration پیش نیاید */}
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
    </button>
  );
}

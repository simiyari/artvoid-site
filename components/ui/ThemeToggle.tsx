"use client";

import { home } from "@/content/home";

/** نسخه اولیه — در مرحله ۲ با آیکون و انیمیشن کامل می‌شود */
export default function ThemeToggle() {
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
      aria-label={home.themeToggleLabel}
      className="inline-flex h-11 min-w-11 items-center justify-center rounded-sm border border-gray-soft px-4 text-small text-ink-soft transition-colors duration-200 hover:border-gray-strong hover:text-ink"
    >
      {home.themeToggleText}
    </button>
  );
}

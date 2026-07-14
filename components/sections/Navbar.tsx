"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { site } from "@/content/site";

function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <>
      <img src="/brand/mark-dark.svg" alt="" width={size} height={size} className="dark:hidden" />
      <img src="/brand/mark-light.svg" alt="" width={size} height={size} className="hidden dark:block" />
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-soft bg-paper transition-colors duration-200">
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* نوبار: فقط لوگومارک (تصمیم سپهر — بدون لوگوتایپ) */}
        <Link href="/" aria-label={site.brand} className="flex items-center">
          <BrandMark size={32} />
        </Link>

        <nav aria-label={site.navAriaMain} className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-small text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {/* هم‌قد با دکمه sm کنارش — آیتم‌های کنار هم باید یک اندازه باشند */}
          <ThemeToggle size="sm" />
          <Button href={site.cta.href} size="sm">
            {site.cta.label}
          </Button>
        </div>

        {/* موبایل */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={site.menuLabel}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-gray-soft text-ink-soft transition-colors duration-200 hover:border-gray-strong hover:text-ink"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label={site.navAriaMobile}
          className="border-t border-gray-soft md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-11 items-center text-body text-ink-soft transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Button href={site.cta.href} className="mt-3 w-full">
              {site.cta.label}
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}

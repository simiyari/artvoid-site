import ThemeToggle from "@/components/ui/ThemeToggle";
import { home } from "@/content/home";

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      {/* لوگومارک — نسخه متناسب با هر تم */}
      <img
        src="/brand/mark-dark.svg"
        alt=""
        width={48}
        height={48}
        className="mb-2 dark:hidden"
      />
      <img
        src="/brand/mark-light.svg"
        alt=""
        width={48}
        height={48}
        className="mb-2 hidden dark:block"
      />

      <h1 lang="en" dir="ltr" className="font-display text-display text-ink">
        {home.brand}
      </h1>

      <p className="text-h3 text-ink-soft">{home.title}</p>

      <p className="max-w-md text-body text-gray-strong">{home.tagline}</p>

      <p className="text-small text-gray-strong">
        {home.meta}
        <span aria-hidden="true"> · </span>
        <span lang="en" dir="ltr" className="font-latin">
          {home.metaLatin}
        </span>
      </p>

      <div className="mt-4">
        <ThemeToggle />
      </div>
    </main>
  );
}

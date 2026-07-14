import Container from "@/components/ui/Container";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-soft">
      <Container className="flex flex-col gap-4 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          {/* لاک‌آپ برند LTR: لوگومارک چپ، بعد لوگوتایپ کوچک هم‌تناسب (تصمیم سپهر) */}
          <span dir="ltr" className="flex items-center gap-2.5">
            <img src="/brand/mark-dark.svg" alt="" width={22} height={22} className="dark:hidden" />
            <img src="/brand/mark-light.svg" alt="" width={22} height={22} className="hidden dark:block" />
            <span lang="en" className="font-latin text-small font-bold tracking-widest text-ink">
              {site.logotype}
            </span>
          </span>
          <span className="text-small text-gray-strong">{site.tagline}</span>
        </div>
        <p className="text-small text-gray-strong">{site.footer.rights}</p>
      </Container>
    </footer>
  );
}

import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ProcessScroll from "@/components/sections/ProcessScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SitePreview from "@/components/ui/SitePreview";
import { ArrowForwardIcon } from "@/components/ui/icons";
import { home } from "@/content/home";

function SectionHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <Reveal>
      <div className="mb-12 flex max-w-2xl flex-col gap-3">
        <h2 className="text-h2 text-ink">{title}</h2>
        <p className="text-body text-gray-strong">{sub}</p>
      </div>
    </Reveal>
  );
}

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-small font-medium text-ink"
    >
      {label}
      <ArrowForwardIcon
        size={16}
        className="transition-transform duration-200 group-hover:-translate-x-1"
      />
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* خدمات */}
      <Section className="bg-mist transition-colors duration-200">
        <Container>
          <SectionHeader title={home.services.title} sub={home.services.sub} />
          <div className="grid gap-6 md:grid-cols-3">
            {home.services.items.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <Card
                  hover
                  className="flex h-full flex-col items-start gap-4 transition-transform duration-200 hover:-translate-y-1"
                >
                  <h3 className="text-h3 text-ink">{service.title}</h3>
                  <p className="flex-1 text-body text-gray-strong">{service.body}</p>
                  <ArrowLink href={service.href} label={home.services.more} />
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* نمونه‌کارهای برجسته */}
      <Section>
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <div className="flex max-w-2xl flex-col gap-3">
                <h2 className="text-h2 text-ink">{home.work.title}</h2>
                <p className="text-body text-gray-strong">{home.work.sub}</p>
              </div>
            </Reveal>
            <Reveal className="hidden md:block">
              <ArrowLink href="/work" label={home.work.all} />
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {home.work.items.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.12}>
                <Link
                  href={project.href}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-gray-soft bg-white transition-all duration-200 hover:-translate-y-1 hover:border-gray-strong"
                >
                  {/* صحنه پیش‌نمایش — قاب مرورگر از پایین کارت بیرون می‌زند و در hover بالا می‌آید */}
                  <div className="overflow-hidden bg-mist px-6 pt-8 transition-colors duration-200 md:px-10 md:pt-10">
                    <SitePreview
                      variant={project.preview}
                      className="translate-y-2 transition-transform duration-300 ease-out group-hover:translate-y-0"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 border-t border-gray-soft p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <Badge variant="outline">{project.category}</Badge>
                      <ArrowForwardIcon
                        size={20}
                        className="text-gray-strong transition-transform duration-200 group-hover:-translate-x-1"
                      />
                    </div>
                    <span lang="en" dir="ltr" className="block text-start font-display text-h2 text-ink">
                      {project.name}
                    </span>
                    <p className="max-w-md text-body text-gray-strong">{project.result}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 md:hidden">
            <ArrowLink href="/work" label={home.work.all} />
          </Reveal>
        </Container>
      </Section>

      {/* فرآیند کار — Scrollytelling چسبان */}
      <ProcessScroll />

      {/* CTA پایانی — بلوک معکوس مونوکروم */}
      <Section className="bg-ink transition-colors duration-200">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start gap-6 py-8 md:items-center md:text-center">
              <h2 className="text-h1 text-paper">{home.cta.title}</h2>
              <p className="max-w-xl text-body text-gray-soft">{home.cta.body}</p>
              <Button
                href={home.cta.button.href}
                variant="inverse"
                size="lg"
                className="w-full sm:w-auto"
              >
                {home.cta.button.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}

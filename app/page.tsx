import Hero from "@/components/sections/Hero";
import ProcessScroll from "@/components/sections/ProcessScroll";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SitePreview from "@/components/ui/SitePreview";
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

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* خدمات */}
      {/* id = لنگرِ منو (content/site.ts)؛ scroll-mt هم‌قدِ نوبارِ چسبان h-16 */}
      <Section id="services" className="scroll-mt-16 bg-mist transition-colors duration-200">
        <Container>
          <SectionHeader title={home.services.title} sub={home.services.sub} />
          <div className="grid gap-6 md:grid-cols-3">
            {home.services.items.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <Card className="flex h-full flex-col items-start gap-4">
                  <h3 className="text-h3 text-ink">{service.title}</h3>
                  <p className="flex-1 text-body text-gray-strong">{service.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* نمونه‌کارهای برجسته */}
      <Section id="work" className="scroll-mt-16">
        <Container>
          <SectionHeader title={home.work.title} sub={home.work.sub} />
          <div className="grid gap-6 md:grid-cols-2">
            {home.work.items.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.12}>
                {/* صفحهٔ پروژه هنوز نیست (۱۰-۱۶)، پس کارت پیوند ندارد */}
                <div className="group flex h-full flex-col overflow-hidden rounded-md border border-gray-soft bg-white transition-colors duration-200">
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
                    </div>
                    <span lang="en" dir="ltr" className="block text-start font-display text-h2 text-ink">
                      {project.name}
                    </span>
                    <p className="max-w-md text-body text-gray-strong">{project.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* فرآیند کار — Scrollytelling چسبان */}
      <ProcessScroll />
    </main>
  );
}

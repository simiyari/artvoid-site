import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { devUi } from "@/content/dev-ui";

export const metadata: Metadata = {
  title: "کتابخانه اجزا",
  robots: { index: false, follow: false },
};

// سواچ‌ها با کلاس literal تا Tailwind تولیدشان کند
const monochromeSwatches = [
  { name: "ink", cls: "bg-ink" },
  { name: "ink-soft", cls: "bg-ink-soft" },
  { name: "gray-strong", cls: "bg-gray-strong" },
  { name: "gray", cls: "bg-gray" },
  { name: "gray-soft", cls: "bg-gray-soft" },
  { name: "mist", cls: "bg-mist" },
  { name: "paper", cls: "bg-paper" },
  { name: "white", cls: "bg-white" },
];

const semanticSwatches = [
  { name: "success", cls: "bg-success" },
  { name: "danger", cls: "bg-danger" },
  { name: "warning", cls: "bg-warning" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-8 border-b border-gray-soft pb-4 text-h2 text-ink">{children}</h2>;
}

export default function DevUiPage() {
  const t = devUi;

  return (
    <main>
        <Section className="pb-0 md:pb-0">
          <Container>
            <h1 className="text-h1 text-ink">{t.title}</h1>
            <p className="mt-4 max-w-2xl text-body text-gray-strong">{t.intro}</p>
          </Container>
        </Section>

        {/* تایپوگرافی */}
        <Section>
          <Container>
            <SectionTitle>{t.sections.typography}</SectionTitle>
            <div className="flex flex-col gap-6">
              <p className="text-display text-ink">{t.typographySamples.display}</p>
              <p className="text-h1 text-ink">{t.typographySamples.h1}</p>
              <p className="text-h2 text-ink">{t.typographySamples.h2}</p>
              <p className="text-h3 text-ink">{t.typographySamples.h3}</p>
              <p className="max-w-2xl text-body text-ink-soft">{t.typographySamples.body}</p>
              <p className="text-small text-gray-strong">{t.typographySamples.small}</p>
              <p lang="en" dir="ltr" className="font-latin text-body text-ink-soft">
                {t.typographySamples.latin}
              </p>
            </div>
          </Container>
        </Section>

        {/* رنگ‌ها */}
        <Section className="bg-mist transition-colors duration-200">
          <Container>
            <SectionTitle>{t.sections.colors}</SectionTitle>
            <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
              {monochromeSwatches.map((swatch) => (
                <div key={swatch.name} className="flex flex-col gap-2">
                  <div className={`h-14 rounded-sm border border-gray-soft ${swatch.cls}`} />
                  <span lang="en" dir="ltr" className="font-latin text-small text-gray-strong">
                    {swatch.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-4 gap-4 md:grid-cols-8">
              {semanticSwatches.map((swatch) => (
                <div key={swatch.name} className="flex flex-col gap-2">
                  <div className={`h-14 rounded-sm ${swatch.cls}`} />
                  <span lang="en" dir="ltr" className="font-latin text-small text-gray-strong">
                    {swatch.name}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* دکمه‌ها */}
        <Section>
          <Container>
            <SectionTitle>{t.sections.buttons}</SectionTitle>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">{t.buttons.sm}</Button>
              <Button>{t.buttons.md}</Button>
              <Button size="lg">{t.buttons.lg}</Button>
              <Button variant="ghost">{t.buttons.ghost}</Button>
              <Button loading>{t.buttons.loading}</Button>
              <Button disabled>{t.buttons.disabled}</Button>
              <Button variant="ghost" size="sm" href="#">
                {t.buttons.link}
              </Button>
            </div>
          </Container>
        </Section>

        {/* نشان‌ها */}
        <Section className="pt-0 md:pt-0">
          <Container>
            <SectionTitle>{t.sections.badges}</SectionTitle>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{t.badges.neutral}</Badge>
              <Badge variant="outline">{t.badges.outline}</Badge>
              <Badge variant="success">{t.badges.success}</Badge>
              <Badge variant="danger">{t.badges.danger}</Badge>
              <Badge variant="warning">{t.badges.warning}</Badge>
            </div>
          </Container>
        </Section>

        {/* کارت‌ها */}
        <Section className="bg-mist transition-colors duration-200">
          <Container>
            <SectionTitle>{t.sections.cards}</SectionTitle>
            <div className="grid gap-6 md:grid-cols-3">
              {t.cards.map((card, index) => (
                <Card key={card.title} hover>
                  <div className="flex flex-col items-start gap-3">
                    <Badge variant={index === 2 ? "warning" : "success"}>{card.badge}</Badge>
                    <h3 className="text-h3 text-ink">{card.title}</h3>
                    <p className="text-body text-gray-strong">{card.body}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* فرم */}
        <Section>
          <Container>
            <SectionTitle>{t.sections.forms}</SectionTitle>
            <div className="grid max-w-3xl gap-6 md:grid-cols-2">
              <Input
                label={t.form.nameLabel}
                placeholder={t.form.namePlaceholder}
                hint={t.form.nameHint}
                autoComplete="name"
              />
              <Input
                type="email"
                label={t.form.emailLabel}
                placeholder={t.form.emailPlaceholder}
                error={t.form.emailError}
                defaultValue="artvoid.ir"
                dir="ltr"
                autoComplete="email"
              />
              <Select
                label={t.form.serviceLabel}
                placeholder={t.form.servicePlaceholder}
                options={t.form.serviceOptions}
              />
              <Textarea
                label={t.form.messageLabel}
                placeholder={t.form.messagePlaceholder}
                className="md:col-span-2"
              />
            </div>
          </Container>
        </Section>

        {/* انیمیشن ورود */}
        <Section className="bg-mist transition-colors duration-200">
          <Container>
            <SectionTitle>{t.sections.reveal}</SectionTitle>
            <p className="mb-8 text-small text-gray-strong">{t.reveal.hint}</p>
            <div className="grid gap-6 md:grid-cols-3">
              {t.reveal.items.map((item, index) => (
                <Reveal key={item} delay={index * 0.12}>
                  <Card>
                    <p className="text-h3 text-ink">{item}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
    </main>
  );
}

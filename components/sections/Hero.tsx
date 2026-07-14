"use client";

import { MotionConfig, motion } from "motion/react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { home } from "@/content/home";

// امضای حرکتی سایت: ورود پلکانی نرم با منحنی --ease-enter (DESIGN.md بخش حرکت)
const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  const t = home.hero;

  return (
    <MotionConfig reducedMotion="user">
      {/* ارتفاع تقریباً تمام‌صفحه (منهای نوبار 4rem) — حس اپلیکیشن تمام‌قد */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center">
        <Container>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex max-w-3xl flex-col items-start gap-6 py-24"
          >
            <motion.p variants={item} className="text-small font-medium text-gray-strong">
              {t.eyebrow}
            </motion.p>

            <h1 className="text-display text-ink">
              {t.titleLines.map((line) => (
                <motion.span key={line} variants={item} className="block">
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p variants={item} className="max-w-2xl text-h3 font-normal text-ink-soft">
              {t.sub}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-4 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center"
            >
              <Button href={t.primaryCta.href} size="lg" className="w-full sm:w-auto">
                {t.primaryCta.label}
              </Button>
              <Button
                href={t.secondaryCta.href}
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto"
              >
                {t.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* نشانه اسکرول — حرکت ملایم بی‌پایان، با احترام به reduced-motion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <span className="text-small text-gray">{t.scrollHint}</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-8 w-px bg-gray"
          />
        </motion.div>
      </section>
    </MotionConfig>
  );
}

"use client";

import { useRef, useState } from "react";
import {
  MotionConfig,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { home } from "@/content/home";

type Step = (typeof home.process.steps)[number];

type LayerProps = {
  step: Step;
  index: number;
  total: number;
  progress: MotionValue<number>;
  active: number;
  reduce: boolean;
};

/**
 * لایه تصویر تمام‌صفحه — opacity و scale مستقیماً به پیشروی اسکرول بسته‌اند (scrubbed).
 * هر تصویر در پنجره [i/n, (i+1)/n] زنده است و با crossfade کوتاه به بعدی می‌رسد.
 */
function ImageLayer({ step, index, total, progress, active, reduce }: LayerProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const fade = 0.05;

  const first = index === 0;
  const last = index === total - 1;

  const opacity = useTransform(
    progress,
    first
      ? [end - fade, end + fade]
      : last
        ? [start - fade, start + fade]
        : [start - fade, start + fade, end - fade, end + fade],
    first ? [1, 0] : last ? [0, 1] : [0, 1, 1, 0],
  );
  // زوم آهسته پیوسته در طول پنجره — حس سینمایی
  const scale = useTransform(progress, [start - fade, end + fade], [1.12, 1]);

  return (
    <motion.img
      src={step.image}
      alt=""
      style={reduce ? { opacity: index === active ? 1 : 0 } : { opacity, scale }}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

/** متن روی تصویر — با اسکرول بالا می‌آید، می‌ماند و به‌نرمی خارج می‌شود (scrubbed) */
function TextLayer({ step, index, total, progress, active, reduce }: LayerProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const span = end - start;

  const first = index === 0;
  const last = index === total - 1;

  const opacity = useTransform(
    progress,
    first
      ? [end - span * 0.35, end - span * 0.08]
      : last
        ? [start + span * 0.08, start + span * 0.4]
        : [start + span * 0.08, start + span * 0.4, end - span * 0.35, end - span * 0.08],
    first ? [1, 0] : last ? [0, 1] : [0, 1, 1, 0],
  );

  const y = useTransform(
    progress,
    first ? [end - span * 0.35, end] : last ? [start, start + span * 0.4] : [start, start + span * 0.4, end - span * 0.35, end],
    first ? [0, -64] : last ? [64, 0] : [64, 0, 0, -64],
  );

  // عدد غول‌پیکر با ضریب حرکت بیشتر — عمق پارالاکسی
  const ghostY = useTransform(
    progress,
    first ? [end - span * 0.35, end] : last ? [start, start + span * 0.4] : [start, start + span * 0.4, end - span * 0.35, end],
    first ? [0, -120] : last ? [120, 0] : [120, 0, 0, -120],
  );

  return (
    <motion.div
      style={reduce ? { opacity: index === active ? 1 : 0 } : { opacity }}
      className="pointer-events-none absolute inset-0 flex items-end pb-36 md:pb-44"
    >
      <Container>
        <motion.div style={reduce ? undefined : { y }} className="flex max-w-2xl flex-col gap-2">
          <motion.span
            style={reduce ? undefined : { y: ghostY }}
            aria-hidden="true"
            className="text-giant select-none text-on-image/20"
          >
            {step.number}
          </motion.span>
          <h3 className="text-h1 text-on-image md:text-display">{step.title}</h3>
          <p className="max-w-md text-body text-on-image/85 md:text-h3 md:font-normal md:leading-relaxed">
            {step.body}
          </p>
        </motion.div>
      </Container>
    </motion.div>
  );
}

/**
 * فرآیند کار — Scrollytelling تمام‌صفحه: تصاویر فول‌بلید که با اسکرول crossfade+زوم می‌شوند،
 * متن‌های scrubbed روی اسکریم، شماره‌ها و ریل پیشرفت پایین صحنه.
 */
export default function ProcessScroll() {
  const t = home.process;
  const steps = t.steps;
  const total = steps.length;

  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(total - 1, Math.max(0, Math.floor(v * total))));
  });

  const rail = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="relative h-[400svh]">
        <div className="sticky top-0 h-svh overflow-hidden bg-image-scrim">
          {steps.map((step, index) => (
            <ImageLayer
              key={step.number}
              step={step}
              index={index}
              total={total}
              progress={scrollYProgress}
              active={active}
              reduce={reduce}
            />
          ))}

          {/* اسکریم‌های ثابت برای خوانایی (توکن‌های فلیپ‌نشونده) */}
          <div aria-hidden="true" className="absolute inset-0 bg-image-scrim/40" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-image-scrim/90 via-image-scrim/40 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-image-scrim/70 to-transparent"
          />

          {steps.map((step, index) => (
            <TextLayer
              key={step.number}
              step={step}
              index={index}
              total={total}
              progress={scrollYProgress}
              active={active}
              reduce={reduce}
            />
          ))}

          {/* هدر بخش — بالای صحنه */}
          <div className="absolute inset-x-0 top-0 pt-24">
            <Container className="flex flex-col gap-1">
              <h2 className="text-h3 text-on-image">{t.title}</h2>
              <p className="text-small text-on-image/70">{t.sub}</p>
            </Container>
          </div>

          {/* پایین صحنه: شماره قدم‌ها + ریل پیشرفت */}
          <div className="absolute inset-x-0 bottom-0 pb-8 md:pb-10">
            <Container className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                {steps.map((step, index) => (
                  <span
                    key={step.number}
                    className={cn(
                      "text-small font-medium transition-colors duration-200",
                      index === active ? "text-on-image" : "text-on-image/40",
                    )}
                  >
                    {step.number}
                    <span className="hidden md:inline"> — {step.title}</span>
                  </span>
                ))}
              </div>
              <div aria-hidden="true" className="h-px w-full bg-on-image/25">
                <motion.div style={{ scaleX: rail }} className="h-px origin-right bg-on-image" />
              </div>
            </Container>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

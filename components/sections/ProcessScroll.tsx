"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { home } from "@/content/home";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * فرآیند کار به‌صورت Scrollytelling: سکشن ۴۰۰svh است، صحنه sticky می‌ماند و
 * با پیشروی اسکرول، قدم فعال عوض می‌شود و ریل پیشرفت پر می‌شود.
 * با prefers-reduced-motion حرکت‌های transform حذف و فقط crossfade می‌ماند.
 */
export default function ProcessScroll() {
  const t = home.process;
  const steps = t.steps;
  const lastNumber = steps[steps.length - 1].number;

  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length))));
  });

  const rail = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const step = steps[active];

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="relative h-[400svh] bg-mist transition-colors duration-200">
        <div className="sticky top-0 flex h-svh items-center overflow-hidden">
          <Container className="w-full">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              {/* ستون فهرست: تیتر + قدم‌ها + ریل پیشرفت */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h2 className="text-h2 text-ink">{t.title}</h2>
                  <p className="max-w-md text-body text-gray-strong">{t.sub}</p>
                </div>

                {/* فهرست عمودی قدم‌ها — فقط دسکتاپ */}
                <div className="hidden flex-col md:flex">
                  {steps.map((item, index) => (
                    <div
                      key={item.number}
                      className="flex items-center gap-4 border-b border-gray-soft py-4 first:border-t"
                    >
                      <span
                        className={cn(
                          "text-small font-medium transition-colors duration-200",
                          index === active ? "text-ink" : "text-gray",
                        )}
                      >
                        {item.number}
                      </span>
                      <span
                        className={cn(
                          "text-h3 transition-colors duration-200",
                          index === active ? "text-ink" : "text-gray",
                        )}
                      >
                        {item.title}
                      </span>
                      <span
                        className={cn(
                          "ms-auto size-2 rounded-full transition-colors duration-200",
                          index === active ? "bg-ink" : "bg-gray-soft",
                        )}
                      />
                    </div>
                  ))}
                </div>

                {/* شمارنده موبایل */}
                <p className="text-small font-medium text-gray-strong md:hidden">
                  {step.number}
                  <span aria-hidden="true"> / </span>
                  {lastNumber}
                </p>

                {/* ریل پیشرفت — از راست پر می‌شود (RTL) */}
                <div className="h-px w-full bg-gray-soft" aria-hidden="true">
                  <motion.div style={{ scaleX: rail }} className="h-px origin-right bg-ink" />
                </div>
              </div>

              {/* صحنه نمایش قدم فعال */}
              <div className="relative">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="flex min-h-72 flex-col justify-between gap-8 rounded-md border border-gray-soft bg-white p-8 md:min-h-80 md:p-12"
                  >
                    <span aria-hidden="true" className="text-display font-bold text-gray-soft">
                      {step.number}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-h1 text-ink">{step.title}</h3>
                      <p className="max-w-md text-body text-gray-strong">{step.body}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </MotionConfig>
  );
}

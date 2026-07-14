"use client";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * انیمیشن ورود عناصر هنگام رسیدن به دید — فقط یک بار (DESIGN.md بخش حرکت).
 * reducedMotion="user" یعنی با prefers-reduced-motion حرکت transform حذف می‌شود.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}

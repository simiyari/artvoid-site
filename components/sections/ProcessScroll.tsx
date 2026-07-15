"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { home } from "@/content/home";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * فرآیند کار — Scrollytelling تمام‌صفحه با GSAP ScrollTrigger (scrub).
 * تایم‌لاین هر فریم وضعیت همه لایه‌ها را به‌صورت قطعی از progress ست می‌کند؛
 * برخلاف بایندینگ‌های per-layer، فریز/پرش ساختاراً ممکن نیست.
 * هر قدم ۱ واحد تایم‌لاین است (مجموع ۴): کراس‌فید ±۰٫۱۵ حول مرزها،
 * زوم پیوسته ۱٫۱۲→۱ در طول پنجره، متن‌ها ورود/خروج scrubbed + پارالاکس عدد.
 */
export default function ProcessScroll() {
  const t = home.process;
  const steps = t.steps;
  const total = steps.length;

  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root) return;

      const imgs = gsap.utils.toArray<HTMLElement>("[data-process-image]", root);
      const texts = gsap.utils.toArray<HTMLElement>("[data-process-text]", root);
      const ghosts = gsap.utils.toArray<HTMLElement>("[data-process-ghost]", root);

      const trigger = {
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self: ScrollTrigger) => {
          setActive(Math.min(total - 1, Math.max(0, Math.floor(self.progress * total))));
        },
      };

      const mm = gsap.matchMedia();

      // بعد از آماده‌شدن فونت‌ها، اندازه‌گیری‌ها تازه شود (جابه‌جایی ارتفاع متن‌های بالای سکشن)
      document.fonts?.ready.then(() => ScrollTrigger.refresh()).catch(() => {});

      // حالت عادی: کراس‌فید + زوم + حرکت متن، همه scrubbed
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(imgs, { autoAlpha: 0, scale: 1.12 });
        gsap.set(imgs[0], { autoAlpha: 1 });
        gsap.set(texts, { autoAlpha: 0, y: 64 });
        gsap.set(texts[0], { autoAlpha: 1, y: 0 });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { ...trigger, scrub: true },
        });

        imgs.forEach((img, i) => {
          // زوم آهسته پیوسته در پنجره خودِ قدم
          tl.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 1 }, i);
          if (i > 0) {
            // کراس‌فید حول مرز قدم قبلی → این قدم
            tl.to(imgs[i - 1], { autoAlpha: 0, duration: 0.3 }, i - 0.15);
            tl.to(img, { autoAlpha: 1, duration: 0.3 }, i - 0.15);
          }
        });

        texts.forEach((text, i) => {
          if (i > 0) {
            tl.fromTo(
              text,
              { autoAlpha: 0, y: 64 },
              { autoAlpha: 1, y: 0, duration: 0.35 },
              i + 0.05,
            );
          }
          if (i < total - 1) {
            tl.to(text, { autoAlpha: 0, y: -64, duration: 0.3 }, i + 1 - 0.3);
          }
          // پارالاکس عدد غول‌پیکر — سریع‌تر از متن حرکت می‌کند
          tl.fromTo(ghosts[i], { y: 80 }, { y: -80, duration: 1 }, i);
        });

        if (railRef.current) {
          tl.fromTo(railRef.current, { scaleX: 0 }, { scaleX: 1, duration: total }, 0);
        }
      });

      // reduced-motion: فقط کاتِ لحظه‌ای در مرزها — بدون هیچ حرکتی
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(imgs, { autoAlpha: 0, scale: 1, y: 0 });
        gsap.set(imgs[0], { autoAlpha: 1 });
        gsap.set(texts, { autoAlpha: 0, y: 0 });
        gsap.set(texts[0], { autoAlpha: 1 });
        if (railRef.current) gsap.set(railRef.current, { scaleX: 1 });

        const tl = gsap.timeline({
          scrollTrigger: { ...trigger, scrub: true },
        });
        for (let i = 1; i < total; i++) {
          tl.set(imgs[i - 1], { autoAlpha: 0 }, i);
          tl.set(imgs[i], { autoAlpha: 1 }, i);
          tl.set(texts[i - 1], { autoAlpha: 0 }, i);
          tl.set(texts[i], { autoAlpha: 1 }, i);
        }
        // طول تایم‌لاین را به اندازه کل پنجره‌ها نگه می‌داریم
        tl.set({}, {}, total);
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative h-[400svh]">
      <div className="sticky top-0 h-svh overflow-hidden bg-image-scrim">
        {/* لایه‌های تصویر تمام‌صفحه — کنترل کامل با تایم‌لاین GSAP */}
        {steps.map((step, index) => (
          <img
            key={step.number}
            data-process-image
            src={step.image}
            alt=""
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              index > 0 && "opacity-0",
            )}
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

        {/* متن‌های روی تصویر */}
        {steps.map((step, index) => (
          <div
            key={step.number}
            data-process-text
            className={cn(
              "pointer-events-none absolute inset-0 flex items-end pb-36 md:pb-44",
              index > 0 && "opacity-0",
            )}
          >
            <Container>
              <div className="flex max-w-2xl flex-col gap-2">
                <span
                  data-process-ghost
                  aria-hidden="true"
                  className="text-giant select-none text-on-image/20"
                >
                  {step.number}
                </span>
                <h3 className="text-h1 text-on-image md:text-display">{step.title}</h3>
                <p className="max-w-md text-body text-on-image/85 md:text-h3 md:font-normal md:leading-relaxed">
                  {step.body}
                </p>
              </div>
            </Container>
          </div>
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
              <div ref={railRef} className="h-px origin-right bg-on-image" />
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

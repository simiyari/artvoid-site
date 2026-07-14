/** ترکیب شرطی کلاس‌ها — بدون وابستگی خارجی */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

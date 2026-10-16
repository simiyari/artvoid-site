// متن‌ها و لینک‌های سراسری سایت — هاردکد در JSX ممنوع (قانون CLAUDE.md)
export const site = {
  brand: "Artvoid",
  /** لوگوتایپ رسمی — حروف بزرگ با فونت Inter، همیشه بعد از لوگومارک */
  logotype: "ARTVOID",
  tagline: "استودیو طراحی و توسعه دیجیتال",
  // فقط مقصدهای موجود (۱۰-۱۶): /work، /services، /about و /start صفحه ندارند؛
  // تا سایتِ تازه، منو به بخش‌های همین صفحه لنگر می‌خورد و CTAی تماس نداریم.
  nav: [
    { label: "خانه", href: "/" },
    { label: "نمونه‌کارها", href: "/#work" },
    { label: "خدمات", href: "/#services" },
  ],
  navAriaMain: "ناوبری اصلی",
  navAriaMobile: "منوی موبایل",
  menuLabel: "باز و بسته کردن منو",
  themeToggleLabel: "تغییر حالت روشن و تیره",
  footer: {
    rights: "© ۱۴۰۵ آرت‌وید — همه حقوق محفوظ است.",
  },
};

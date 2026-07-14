# Artvoid — artvoid.ir

سایت رسمی استودیو دیجیتال **آرت‌وید**: طراحی سایت اختصاصی، نرم‌افزار سفارشی و محصولات SaaS.

## استک

- Next.js 16 (App Router، خروجی کاملاً استاتیک) + React 19 + TypeScript
- Tailwind CSS v4 — پیکربندی CSS-first با `@theme` (بدون فایل کانفیگ)
- فارسی RTL — فونت‌ها و همه منابع self-hosted (صفر وابستگی خارجی در runtime)
- دیپلوی: GitHub Actions → GitHub Pages

## توسعه

```bash
npm install
npm run dev     # توسعه محلی
npm run build   # خروجی استاتیک در out/
```

## اسناد پروژه

| فایل | نقش |
|---|---|
| `CLAUDE.md` | پروتکل کار خودران Claude Code |
| `PROGRESS.md` | حافظه پیشرفت بین سشن‌ها |
| `docs/ROADMAP.md` | نقشه مراحل ساخت |
| `docs/DESIGN.md` | سیستم طراحی مونوکروم (منبع واحد حقیقت بصری) |
| `docs/SHOWCASE.md` | ایده‌های دموی زنده UI/UX |

شروع هر سشن Claude Code: «بخون و ادامه بده.»

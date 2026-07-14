# Graph Report - Artvoid Design  (2026-07-14)

## Corpus Check
- 109 files · ~80,378 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 185 nodes · 250 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `decd3b65`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 19 edges
2. `compilerOptions` - 16 edges
3. `CLAUDE.md — مغز فرمانده پروژه Artvoid` - 10 edges
4. `ROADMAP.md — مسیر ساخت سایت Artvoid با Claude Code` - 9 edges
5. `DESIGN.md — سیستم طراحی Artvoid` - 8 edges
6. `PROGRESS.md — حافظه پیشرفت پروژه Artvoid` - 6 edges
7. `سابقه کارهای انجام‌شده` - 6 edges
8. `Button()` - 6 edges
9. `fieldBorder()` - 6 edges
10. `SHOWCASE.md — ایده‌های نمایش زنده UI/UX در سایت Artvoid` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Button()` --calls--> `cn()`  [EXTRACTED]
  components/ui/Button.tsx → lib/cn.ts
- `ThemeToggle()` --calls--> `cn()`  [EXTRACTED]
  components/ui/ThemeToggle.tsx → lib/cn.ts
- `Container()` --calls--> `cn()`  [EXTRACTED]
  components/ui/Container.tsx → lib/cn.ts
- `Badge()` --calls--> `cn()`  [EXTRACTED]
  components/ui/Badge.tsx → lib/cn.ts
- `Card()` --calls--> `cn()`  [EXTRACTED]
  components/ui/Card.tsx → lib/cn.ts

## Import Cycles
- None detected.

## Communities (14 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (14): CLAUDE.md — مغز فرمانده پروژه Artvoid, code:block1 (📍 مرحله [X] — [نام] | ✅ آخرین: [...] | ▶️ بعدی: [...]), code:block2 (/app  /components/{ui,sections,showcase}  /content(همه متن‌ه), استک فنی — جدیدترین نسخه‌ها، غیرقابل مذاکره, 🔑 اقتصاد توکن — بالاترین اولویت رفتاری, حالت BOOTSTRAP (فقط اولین اجرا — خودکار، بدون سؤال اضافه), حالت کار عادی, ساختار پوشه‌ها (+6 more)

### Community 1 - "Community 1"
Cohesion: 0.17
Nodes (11): DESIGN.md — سیستم طراحی Artvoid, حالت تیره (Dark mode), رنگ‌های سمانتیک (فقط برای وضعیت‌های سیستمی — نه دکوراسیون), پالت مونوکروم (تنها پالت مجاز برای UI), ۱. رنگ‌ها, ۲. تایپوگرافی, ۳. فاصله‌گذاری و شبکه, ۴. اجزا (Primitives) (+3 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (10): code:block1 (بخون و ادامه بده.), ROADMAP.md — مسیر ساخت سایت Artvoid با Claude Code, الگوی شروع هر سشن Claude Code, مرحله ۰ — بوت‌استرپ (Claude Code خودکار انجام می‌دهد — پروتکل در CLAUDE.md), مرحله ۱ — اسکلت پروژه, مرحله ۲ — کتابخانه کامپوننت‌های پایه, مرحله ۳ — صفحات اصلی (به ترتیب), مرحله ۴ — بخش Showcase (تمایز اصلی!) (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.21
Nodes (7): inter, switzer, yekan, metadata, site, Footer(), Container()

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (6): SHOWCASE.md — ایده‌های نمایش زنده UI/UX در سایت Artvoid, اولویت ۱ — پنج دموی افتتاحیه, اولویت ۲ — تجربه‌های اسکرول و روایت, اولویت ۳ — ابزارهای تعاملی (تبدیل بازدید به سرنخ), اولویت ۴ — جزئیات امضادار (Polish), قوانین اجرایی

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (19): dependencies, motion, next, react, react-dom, devDependencies, tailwindcss, @tailwindcss/postcss (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.09
Nodes (18): home, container, EASE, item, Button(), ButtonProps, ButtonSize, ButtonVariant (+10 more)

### Community 8 - "Community 8"
Cohesion: 0.17
Nodes (11): PROGRESS.md — حافظه پیشرفت پروژه Artvoid, تصمیمات باز (از کاربر بپرس وقتی به آن رسیدی), تصمیمات قطعی‌شده, سابقه کارهای انجام‌شده, مرحله ۰ — بوت‌استرپ (خودکار توسط Claude Code), مرحله ۱ — اسکلت پروژه, مرحله ۲ — کتابخانه کامپوننت‌های پایه (نمایش در صفحه مخفی /dev/ui), مرحله ۳ — صفحات اصلی (+3 more)

### Community 9 - "Community 9"
Cohesion: 0.40
Nodes (4): Artvoid — artvoid.ir, استک, اسناد پروژه, توسعه

### Community 13 - "Community 13"
Cohesion: 0.12
Nodes (20): devUi, cn(), Badge(), BadgeVariant, styles, Card(), ChevronDownIcon(), fieldBorder() (+12 more)

## Knowledge Gaps
- **99 isolated node(s):** `وضعیت فعلی`, `تصمیمات قطعی‌شده`, `تصمیمات باز (از کاربر بپرس وقتی به آن رسیدی)`, `مرحله ۰ — بوت‌استرپ (خودکار توسط Claude Code)`, `مرحله ۱ — اسکلت پروژه` (+94 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 13` to `Community 4`, `Community 7`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `Button()` connect `Community 7` to `Community 4`, `Community 13`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `وضعیت فعلی`, `تصمیمات قطعی‌شده`, `تصمیمات باز (از کاربر بپرس وقتی به آن رسیدی)` to the rest of the system?**
  _99 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 7` be split into smaller, more focused modules?**
  _Cohesion score 0.09425287356321839 - nodes in this community are weakly interconnected._
# Graph Report - Artvoid Design  (2026-07-14)

## Corpus Check
- 14 files · ~3,981 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 80 nodes · 75 edges · 11 communities (8 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `75937fca`
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

## God Nodes (most connected - your core abstractions)
1. `CLAUDE.md — مغز فرمانده پروژه Artvoid` - 10 edges
2. `ROADMAP.md — مسیر ساخت سایت Artvoid با Claude Code` - 9 edges
3. `DESIGN.md — سیستم طراحی Artvoid` - 8 edges
4. `PROGRESS.md — حافظه پیشرفت پروژه Artvoid` - 6 edges
5. `SHOWCASE.md — ایده‌های نمایش زنده UI/UX در سایت Artvoid` - 6 edges
6. `سابقه کارهای انجام‌شده` - 5 edges
7. `Artvoid — artvoid.ir` - 4 edges
8. `۱. رنگ‌ها` - 4 edges
9. `home` - 3 edges
10. `پروتکل شروع سشن` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (11 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (14): CLAUDE.md — مغز فرمانده پروژه Artvoid, code:block1 (📍 مرحله [X] — [نام] | ✅ آخرین: [...] | ▶️ بعدی: [...]), code:block2 (/app  /components/{ui,sections,showcase}  /content(همه متن‌ه), استک فنی — جدیدترین نسخه‌ها، غیرقابل مذاکره, 🔑 اقتصاد توکن — بالاترین اولویت رفتاری, حالت BOOTSTRAP (فقط اولین اجرا — خودکار، بدون سؤال اضافه), حالت کار عادی, ساختار پوشه‌ها (+6 more)

### Community 1 - "Community 1"
Cohesion: 0.17
Nodes (11): DESIGN.md — سیستم طراحی Artvoid, حالت تیره (Dark mode), رنگ‌های سمانتیک (فقط برای وضعیت‌های سیستمی — نه دکوراسیون), پالت مونوکروم (تنها پالت مجاز برای UI), ۱. رنگ‌ها, ۲. تایپوگرافی, ۳. فاصله‌گذاری و شبکه, ۴. اجزا (Primitives) (+3 more)

### Community 2 - "Community 2"
Cohesion: 0.18
Nodes (10): PROGRESS.md — حافظه پیشرفت پروژه Artvoid, تصمیمات باز (از کاربر بپرس وقتی به آن رسیدی), تصمیمات قطعی‌شده, سابقه کارهای انجام‌شده, مرحله ۰ — بوت‌استرپ (خودکار توسط Claude Code), مرحله ۱ — اسکلت پروژه, مرحله ۲ — کامپوننت‌های پایه, مرحله ۳ به بعد (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (10): code:block1 (بخون و ادامه بده.), ROADMAP.md — مسیر ساخت سایت Artvoid با Claude Code, الگوی شروع هر سشن Claude Code, مرحله ۰ — بوت‌استرپ (Claude Code خودکار انجام می‌دهد — پروتکل در CLAUDE.md), مرحله ۱ — اسکلت پروژه, مرحله ۲ — کتابخانه کامپوننت‌های پایه, مرحله ۳ — صفحات اصلی (به ترتیب), مرحله ۴ — بخش Showcase (تمایز اصلی!) (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.43
Nodes (4): inter, switzer, yekan, metadata

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (6): SHOWCASE.md — ایده‌های نمایش زنده UI/UX در سایت Artvoid, اولویت ۱ — پنج دموی افتتاحیه, اولویت ۲ — تجربه‌های اسکرول و روایت, اولویت ۳ — ابزارهای تعاملی (تبدیل بازدید به سرنخ), اولویت ۴ — جزئیات امضادار (Polish), قوانین اجرایی

### Community 6 - "Community 6"
Cohesion: 0.33
Nodes (5): Artvoid — artvoid.ir, code:bash (npm install), استک, اسناد پروژه, توسعه

## Knowledge Gaps
- **46 isolated node(s):** `nextConfig`, `config`, `metadata`, `هویت`, `🔑 اقتصاد توکن — بالاترین اولویت رفتاری` (+41 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `nextConfig`, `config`, `metadata` to the rest of the system?**
  _46 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._
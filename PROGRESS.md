# PROGRESS.md — حافظه پیشرفت پروژه Artvoid

> Claude Code: این فایل حافظه پروژه بین سشن‌هاست. در شروع هر سشن بخوانش و در پایان هر کار به‌روزش کن.
> فرمت هر رکورد: `- [x] شرح کار — تاریخ — یک خط توضیح/نکته`

## وضعیت فعلی

- **مرحله فعال:** مرحله ۳ — صفحات اصلی (تأیید شده توسط سپهر — ادامه بدون سؤال)
- **کار بعدی:** صفحه /work (گرید نمونه‌کارها + Case Study) سپس /services و /about و /start
- **آخرین به‌روزرسانی:** ۱۴۰۵/۰۴/۲۳ — صفحه خانه با موشن کامل ساخته شد + ۴ اصلاح UI (سایز toggle، برند، فوکوس، color-scheme)

## تصمیمات قطعی‌شده

- برند: Artvoid / دامنه: artvoid.ir / زبان: فارسی RTL
- سبک: مینیمال مونوکروم + رنگ سمانتیک فقط برای وضعیت‌ها
- استک: Next.js 16 + React 19 + TypeScript + Tailwind v4 (CSS-first با @theme) — static export → GitHub Pages (اکانت: simiyari)
- صرفه‌جویی توکن: Graphify (نقشه پروژه در graphify-out/) + پروتکل اقتصاد توکن CLAUDE.md
- سازگاری ایران: صفر منبع خارجی در runtime — همه self-hosted
- دیزاین توکن‌ها: طبق docs/DESIGN.md
- کتابخانه انیمیشن مجاز: Framer Motion
- فونت فارسی: ایران‌یکان X واریابل (اعداد فارسی) — موجود در public/fonts/iran-yekan — ۱۴۰۵/۰۴/۲۳
- فونت لاتین: Switzer (تیترهای لاتین/نام پروژه‌ها) + Inter (متن و اعداد لاتین) — هر دو واریابل و self-hosted — ۱۴۰۵/۰۴/۲۳
- **لوگوتایپ (اصلاح سپهر ۱۴۰۵/۰۴/۲۳):** «ARTVOID» حروف بزرگ با فونت Inter + tracking باز؛ ترتیب: اول لوگومارک بعد لوگوتایپ؛ در نوبار فقط لوگومارک
- اصلاحات UI (سپهر ۱۴۰۵/۰۴/۲۳): آیتم‌های کنار هم هم‌قد؛ فوکوس فیلدها بدون outline (فقط border→ink)؛ color-scheme هماهنگ تم برای کنترل‌های بومی؛ سایت موشن‌محور با حفظ مینیمالیسم
- دامنه artvoid.ir آماده است → basePath خالی + فایل CNAME از روز اول؛ اتصال DNS با سپهر — ۱۴۰۵/۰۴/۲۳
- روت پروژه: پوشه «Artvoid Design» (اسناد بسته starter به روت منتقل شد) — ۱۴۰۵/۰۴/۲۳

## تصمیمات باز (از کاربر بپرس وقتی به آن رسیدی)

- [ ] لوگوی تایپوگرافیک — طراحی در مرحله ۳ هنگام ساخت Navbar (لوگومارک A در public/brand موجود است؛ لوگوتایپ با Switzer)
- [ ] متن‌های نهایی صفحات (فعلاً با placeholder فارسی واقع‌گرایانه جلو برو، لورم‌ایپسوم ممنوع)
- [ ] سرویس دریافت فرم (وقتی به صفحه /start رسیدی گزینه‌ها را معرفی کن)
- [ ] اسکرین‌شات واقعی Ganjriz و IDI Center از سپهر → جایگزین پیش‌نمایش‌های انتزاعی SitePreview در نمونه‌کارها

## سابقه کارهای انجام‌شده

### مرحله ۰ — بوت‌استرپ (خودکار توسط Claude Code)
- [x] git init + .gitignore — ۱۴۰۵/۰۴/۲۳ — برنچ main
- [x] نصب اسکیل ui-ux-pro-max — ۱۴۰۵/۰۴/۲۳ — در .claude/skills نصب شد
- [x] نصب Graphify — ۱۴۰۵/۰۴/۲۳ — از قبل نصب بود (CLI نسخه 0.7.18 + اسکیل سراسری)؛ ساخت گراف و hook بعد از مرحله ۱
- [x] ساخت .graphifyignore — ۱۴۰۵/۰۴/۲۳
- [x] کامیت اولیه اسناد — ۱۴۰۵/۰۴/۲۳

### مرحله ۱ — اسکلت پروژه
- [x] راه‌اندازی Next.js + TS + Tailwind — ۱۴۰۵/۰۴/۲۳ — Next 16.2.10 / React 19.2.7 / Tailwind v4.3.2 / TypeScript 5
- [x] تنظیم static export و basePath — ۱۴۰۵/۰۴/۲۳ — output: export + trailingSlash؛ basePath خالی (دامنه اختصاصی) + public/CNAME
- [x] پیاده‌سازی توکن‌های DESIGN.md در بلوک @theme فایل globals.css — ۱۴۰۵/۰۴/۲۳ — پالت پیش‌فرض Tailwind حذف شد؛ فقط توکن‌های Artvoid
- [x] راه‌اندازی RTL + فونت self-hosted — ۱۴۰۵/۰۴/۲۳ — سه فونت واریابل با next/font/local؛ صفر request خارجی (در DevTools تأیید شد)
- [x] GitHub Actions دیپلوی — ۱۴۰۵/۰۴/۲۳ — .github/workflows/deploy.yml
- [x] ساخت گراف اولیه + hook — ۱۴۰۵/۰۴/۲۳ — «graphify update .» (۸۰ نود) + hook post-commit/post-checkout
- [x] ✅ معیار پایان — ۱۴۰۵/۰۴/۲۳ — فونت فارسی و دو تم در مرورگر تأیید شد؛ Actions سبز؛ cname=artvoid.ir روی Pages ست شد

### مرحله ۲ — کتابخانه کامپوننت‌های پایه (نمایش در صفحه مخفی /dev/ui)
- [x] Button (primary / ghost / سه اندازه / لودینگ / حالت لینک با href) — ۱۴۰۵/۰۴/۲۳
- [x] Card، Input، Textarea، Select، Badge — ۱۴۰۵/۰۴/۲۳ — فرم‌ها با label/hint/error و aria کامل
- [x] Container (max-w-site) و Section (py-16/24) — ۱۴۰۵/۰۴/۲۳
- [x] Navbar (منوی موبایل + aria-expanded) و Footer — ۱۴۰۵/۰۴/۲۳ — در components/sections
- [x] Reveal — ۱۴۰۵/۰۴/۲۳ — پکیج motion@12 نصب شد؛ MotionConfig reducedMotion="user"
- [x] ThemeToggle آیکونی (سواپ آیکون با CSS برای جلوگیری از hydration mismatch) — ۱۴۰۵/۰۴/۲۳
- [x] ✅ معیار پایان — ۱۴۰۵/۰۴/۲۳ — /dev/ui در دو تم + موبایل 375 (بدون اسکرول افقی، منو تست شد) تأیید شد

### مرحله ۳ — صفحات اصلی
- [x] **خانه** — ۱۴۰۵/۰۴/۲۳ — Hero تمام‌قد با ورود پلکانی + نشانه اسکرول انیمیت، خدمات (۳ کارت hover-lift)، نمونه‌کار برجسته با SitePreview (قاب مرورگر CSS اختصاصی + hover رایز)، **فرآیند کار Scrollytelling تمام‌صفحه** (ProcessScroll: تصاویر فول‌بلید scrubbed با crossfade+زوم، متن‌های اسکرول‌محور با پارالاکس عدد غول‌پیکر، ریل پیشرفت)، CTA بلوک معکوس (bg-ink) — Navbar/Footer به layout ریشه + title template
- [ ] نمونه‌کارها (/work) + صفحه Case Study برای Ganjriz و IDI Center
- [ ] خدمات (/services) — سه بخش با فرآیند + بازه قیمت + FAQ
- [ ] درباره (/about)
- [ ] شروع پروژه (/start) — فرم چندمرحله‌ای
- [ ] ✅ معیار پایان: Lighthouse بالای ۹۵ در همه صفحات، تست کامل موبایل

### مرحله ۴ به بعد
*(طبق docs/ROADMAP.md)*

## نکات و درس‌آموخته‌ها

*(هر نکته فنی مهمی که در طول کار کشف شد — مثلاً باگ‌های RTL، ترفندهای static export — اینجا ثبت کن تا در سشن‌های بعد تکرار نشود)*

- نام پوشه روت فاصله دارد («Artvoid Design») و create-next-app آن را به‌عنوان نام پکیج نمی‌پذیرد → فایل‌ها دستی ساخته شد و name در package.json «artvoid-site» است
- **TypeScript 7 (کامپایلر Go) با Next 16 ناسازگار است** — همیشه `typescript@5` نصب کن؛ npm i -D typescript جدیدترین (v7) را می‌آورد و بیلد کرش می‌کند
- دستور ساخت گراف در graphify 0.7.x «graphify update .» است (نه «graphify .»)؛ استخراج سمانتیک LLM اختیاری است (کلید GEMINI_API_KEY) و فعلاً AST-only کافی است
- بدنه ترنزیشن رنگ ۲۰۰ms دارد → در تست خودکار، رنگ‌ها را بعد از ~۴۰۰ms بخوان وگرنه مقدار میانی می‌گیری
- graphify-out/cache/ در .gitignore است (hook بعد از هر کامیت بازش می‌سازد و churn می‌شد)؛ خود graph.json/report/html کامیت می‌شوند و همیشه «یک کامیت عقب»اند — طبیعی است
- **DNS دامنه — پیکربندی کامل شد (۱۴۰۵/۰۴/۲۳):** میزبانی DNS روی **ArvanCloud** پلن رایگان Basic (اکانت سپهر). رکوردها: `ANAME @ → simiyari.github.io` و `CNAME www → simiyari.github.io` (هر دو با ابر/پروکسی **خاموش** — لازمه صدور گواهی SSL گیت‌هاب). NSهای دامنه در «کنترل پنل دامنه» ایران‌سرور (domainpanel.reseller.world) به `a.ns.arvancdn.ir` / `b.ns.arvancdn.ir` تغییر کرد — رجیستری پذیرفت، اعمال تا ۲۴ ساعت
- نکته پلن رایگان آروان: چند رکورد A همنام (load balancing) مجاز نیست → به‌جایش ANAME استفاده شد که همه IPهای GitHub Pages را پوشش می‌دهد؛ ابر (پروکسی) هر رکورد باید خاموش بماند
- **کار باقی‌مانده دامنه (فقط وقتی سپهر اعلام کرد — خودسر انجام نده):** ① چک delegation با `Resolve-DnsName artvoid.ir -Type NS` ② در پنل آروان (cdn/artvoid.ir/dashboard) دکمه Check Again ③ بعد از صدور گواهی: `gh api -X PUT repos/simiyari/artvoid-site/pages -f https_enforced=true` ④ تست نهایی https://artvoid.ir
- اکشن‌های v4 گیت‌هاب هشدار deprecation نود ۲۰ می‌دهند (کار می‌کنند) → در فرصت مناسب به checkout@v5 / setup-node@v5 / upload-pages-artifact@v4 ارتقا بده
- آیکون‌ها: ست اینلاین SVG اختصاصی با stroke 1.5 در components/ui/icons.tsx — وابستگی lucide اضافه نشد (قانون «کتابخانه جدید بدون تأیید»)
- فرم‌های کنترل‌نشده + useId در سرور کامپوننت‌ها کار می‌کند؛ خطای فرم با role="alert" اعلام می‌شود
- در تست خودکار React: خواندن aria-expanded بلافاصله بعد از click() مقدار قدیمی می‌دهد (آپدیت async است) → بعد از ~300ms بخوان
- پنل مرورگر Claude وقتی hidden است rAF نمی‌زند → همه انیمیشن‌های motion (whileInView، useScroll) فریز می‌شوند؛ فیچرهای اسکرولی را فقط در مرورگر فوکوس‌دار (کروم سپهر) می‌شود دید — DOM/استایل را جدا verify کن
- **قانون طلایی موشن scrubbed:** کامپوننتی که style آن به MotionValue بسته است (useTransform) باید memo باشد و هیچ prop متغیری (مثل active) نگیرد — ری‌رندر وسط اسکرول subscription را بازسازی می‌کند و DOM به MV مرده گوش می‌دهد → فریز وسط کراس‌فید (باگ واقعی ProcessScroll بود، کامیت 85cff6a)
- لینک‌ها با trailingSlash به‌صورت «/path/» رندر می‌شوند → در سلکتورهای تست href="/work/" بنویس نه "/work"
- **هرگز فایل فارسی را با Get-Content/Set-Content پاورشل ۵.۱ دستکاری نکن** — پیش‌فرضش ANSI است و UTF-8 را mojibake می‌کند؛ همیشه از ابزار Edit/Write استفاده کن
- **پیش‌نمایش لوکال حتماً با scripts/preview-server.py** (هدر no-store) — «python -m http.server» ساده Cache-Control نمی‌فرستد و مرورگر نسخه کهنه HTML/JS را نگه می‌دارد و تغییرات دیده نمی‌شوند (یک بار Ctrl+F5 برای پاک‌شدن کش قدیمی لازم است)
- تصاویر تولیدی هیگزفیلد: نسخه minUrl (webp) برای وب کافی و سبک است (۲۰–۲۰۰KB)؛ self-hosted در public/images — پرامپت پایه سری مونوکروم در گزارش‌ها ثبت است
- gh CLI با اکانت simiyari لاگین است (اسکوپ repo + workflow) → ساخت ریپوی ریموت و تنظیم Pages از ترمینال ممکن است (فقط با تأیید سپهر)
- محیط: Node 24 / Python 3.14 / git 2.54 — همه آماده

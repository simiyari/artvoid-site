import type { Metadata } from "next";
import { inter, switzer, yekan } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "آرت‌وید | استودیو طراحی و توسعه دیجیتال",
  description:
    "Artvoid — طراحی سایت اختصاصی، نرم‌افزار سفارشی و محصولات SaaS. مینیمال، سریع، دقیق.",
};

// قبل از رندر بدنه اجرا می‌شود تا فلش تم اشتباه (FOUC) نداشته باشیم
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={`${yekan.variable} ${inter.variable} ${switzer.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}

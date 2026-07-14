import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { inter, switzer, yekan } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "آرت‌وید | استودیو طراحی و توسعه دیجیتال",
    template: "%s | آرت‌وید",
  },
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
      <body className="flex min-h-dvh flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

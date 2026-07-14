import localFont from "next/font/local";

// هر سه فونت self-hosted از public/fonts — هیچ منبع خارجی (قانون ایران در CLAUDE.md)

/** فونت فارسی بدنه — واریابل با اعداد فارسی */
export const yekan = localFont({
  src: "../public/fonts/iran-yekan/IRANYekanXVFaNumVF.woff2",
  variable: "--font-yekan",
  weight: "100 900",
  display: "swap",
});

/** لاتین متن و اعداد لاتین */
export const inter = localFont({
  src: [
    { path: "../public/fonts/inter/InterVariable.woff2", style: "normal" },
    { path: "../public/fonts/inter/InterVariable-Italic.woff2", style: "italic" },
  ],
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

/** لاتین تیتر و لوگوتایپ Artvoid */
export const switzer = localFont({
  src: [
    { path: "../public/fonts/switzer/Switzer-Variable.woff2", style: "normal" },
    { path: "../public/fonts/switzer/Switzer-VariableItalic.woff2", style: "italic" },
  ],
  variable: "--font-switzer",
  weight: "100 900",
  display: "swap",
});

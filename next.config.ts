import type { NextConfig } from "next";

// خروجی کاملاً استاتیک برای GitHub Pages — دامنه اختصاصی artvoid.ir؛ پس basePath لازم نیست
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

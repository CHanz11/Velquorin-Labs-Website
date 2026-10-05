import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Velquorin-Labs-Website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

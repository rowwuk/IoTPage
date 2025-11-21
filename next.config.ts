import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/IoTPage",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

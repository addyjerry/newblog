import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disables Next.js image optimization (works for dev)
  },
};

export default nextConfig;

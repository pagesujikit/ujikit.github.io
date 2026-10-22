import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Indonesian is the default locale and is served at `/` (English lives at `/en`)
  async redirects() {
    return [{ source: "/id", destination: "/", permanent: false }];
  },
  async rewrites() {
    return [{ source: "/", destination: "/id" }];
  },
};

export default nextConfig;

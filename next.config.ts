import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "91.219.63.21",
          port: "3001", // твій бекенд порт
          pathname: "/api/media/file/**",
        },
      ],
    },
};

export default nextConfig;

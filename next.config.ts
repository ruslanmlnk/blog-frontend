import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "api.parubets.org",
          pathname: "/api/media/**",
        },
      ],
    },
};

export default nextConfig;

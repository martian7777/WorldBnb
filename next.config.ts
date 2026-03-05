import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "res.cloudinary.com" }
    ]
  },
  // Restrict file tracing to the project root only
  outputFileTracingRoot: path.join(__dirname),

  // Opt into Turbopack to prevent Next 16 build error, while keeping Webpack for Windows glob workaround
  turbopack: {},

  webpack: (config) => {
    // Prevent webpack from following symlinks (avoids EPERM on junction points)
    config.resolve = {
      ...config.resolve,
      symlinks: false,
    };
    return config;
  },
};

export default nextConfig;

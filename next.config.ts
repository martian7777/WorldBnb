import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com"
    ]
  },
  // Restrict file tracing to the project root only
  outputFileTracingRoot: path.join(__dirname),
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
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

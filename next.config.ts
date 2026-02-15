import type { NextConfig } from "next";

const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const nextConfig: NextConfig = {
  transpilePackages: ['recharts', 'react-leaflet'],
  async rewrites() {
    return [
      {
        source: '/r/:path*',
        destination: `${backendUrl}/r/:path*`,
      },
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;

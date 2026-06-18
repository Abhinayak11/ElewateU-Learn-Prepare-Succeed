import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Ensure Turbopack is explicitly disabled.
  reactStrictMode: true,
  serverExternalPackages: ['jspdf', 'html2canvas'],
  experimental: {
    
  },
    
    
    
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

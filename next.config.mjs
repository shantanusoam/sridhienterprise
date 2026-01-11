/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "bhikharamchandmal.in",
      "wpvaadiherbals.b-cdn.net",
      "www.pnbkitchenmate.com",
      "www.bhikharamchandmal.in",
      "www.sarlamills.in",
      "www.7softindia.com",
      "vaadiherbals.in",
      "www.sarlamills.in",
      "www.7softindia.com",
      "cdn.shopify.com",
      "upload.wikimedia.org",
    ],
  },
};

export default nextConfig;

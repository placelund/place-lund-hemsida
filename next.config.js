/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  // Updated for Next.js 16
  serverExternalPackages: ['googleapis'],
  // Empty turbopack config to silence warning
  turbopack: {},
  // Configure image qualities to fix warnings
  images: {
    qualities: [100, 75]
  }
}

module.exports = nextConfig

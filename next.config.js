/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withPWA = require("next-pwa")({
  register: true,
  skipWaiting: true,
  dest: "public",
  disable:
    process.env.NODE_ENV === "development"
    // process.env.NODE_ENV === "preview"
    // process.env.NODE_ENV === "production"
  // delete two lines above to enable PWA in production deployment
});

module.exports = withPWA({
  // swcMinify: true,
  // reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
});
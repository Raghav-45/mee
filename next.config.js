/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withPWA = require("next-pwa");

module.exports = withPWA({
  // swcMinify: true,reactStrictMode: true,
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development"
  }
  // eslint: {
  //   dirs: ["src"],
  // },
});
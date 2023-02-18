/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost:3000", "127.0.0.1"],
  },
};

module.exports = nextConfig;

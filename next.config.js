/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'bayut-production.s3.eu-central-1.amazonaws.com',
      'localhost:3000',
    ],
  },
};

module.exports = nextConfig;

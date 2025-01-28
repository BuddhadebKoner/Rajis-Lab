/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

module.exports = nextConfig;

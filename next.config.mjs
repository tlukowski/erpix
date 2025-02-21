/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "dev.erpixkarcher24.pl",
            },
            {
              protocol: "https",
              hostname: "video.kaercher-media.com",
            },
            {
              protocol: "http",
              hostname: "localhost",
            },
        ],
    },
};

export default nextConfig;

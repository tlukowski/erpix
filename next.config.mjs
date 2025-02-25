/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "erpixkarcher24.pl",
            },            
            {
              protocol: "http",
              hostname: "localhost",
            },
        ],
    },
};

export default nextConfig;

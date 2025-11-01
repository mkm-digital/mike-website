/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/mike-website", // Add this line
  assetPrefix: "/mike-website", // Add this line
  output: "export",
};

export default nextConfig;

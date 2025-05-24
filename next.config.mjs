/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-api.fpt.vn",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

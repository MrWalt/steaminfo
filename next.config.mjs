/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.akamai.steamstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "w320/**",
      },
      {
        protocol: "https",
        hostname: "avatars.steamstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

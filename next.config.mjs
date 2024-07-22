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
      {
        protocol: "http",
        hostname: "media.steampowered.com",
        port: "",
        pathname: "/steamcommunity/public/images/apps/**",
      },
      {
        protocol: "https",
        hostname: "steamcommunity-a.akamaihd.net",
        port: "",
        pathname: "/economy/image/**",
      },
      {
        protocol: "https",
        hostname: "community.cloudflare.steamstatic.com",
        port: "",
        pathname: "/economy/image/**",
      },
    ],
  },
};

// http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#story", permanent: true },
      { source: "/criteria", destination: "/#fit", permanent: true },
      { source: "/financing", destination: "/#capital", permanent: true },
      { source: "/value-add", destination: "/#approach", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;

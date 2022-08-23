/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ];
  },
};

module.exports = nextConfig;

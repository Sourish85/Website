/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? '/Website' : '',
  assetPrefix: isProd ? '/Website/' : '',
};

module.exports = nextConfig;

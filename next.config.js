/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
  ...nextConfig,
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects () {
    return [
      {
        source: '/',
        destination: '/cv',
        permanent: true
      }
    ]
  }
}

const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  webpack: (config) => {
    config.resolve.symlinks = false
    return config
  },
  ...nextConfig
})

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placekitten.com'],
  },
  assetPrefix: isProd ? '/jsci13-poster-showcase/' : ''
}

module.exports = nextConfig

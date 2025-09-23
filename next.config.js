/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}
module.exports = nextConfig
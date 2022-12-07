
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'headless',
        port: '',
        // pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig

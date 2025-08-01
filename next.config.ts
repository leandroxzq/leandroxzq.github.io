import type { NextConfig } from 'next'
import withBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzerFunc = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  output: 'export',
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
}

export default withBundleAnalyzerFunc(nextConfig)

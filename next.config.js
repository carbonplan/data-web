const isDev =
  process.env.VERCEL_ENV === 'preview' || process.env.NODE_ENV === 'development'

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    format: 'mdx',
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
  assetPrefix: isDev ? '' : 'https://data.carbonplan.org',
})

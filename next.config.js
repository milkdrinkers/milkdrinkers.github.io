const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = {
  images: {
    unoptimized: true,
  },
  rewrites: null,
  output: 'export',
  ...withNextra()
}
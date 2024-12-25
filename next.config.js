import nextra from 'nextra';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  output: 'export',
}

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  codeHighlight: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: 'one-dark-pro',
        light: 'one-light'
      }
    }
  },
});

export default withNextra(nextConfig);
import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: (
    <div style={{
      paddingLeft: '50px',
      lineHeight: '38px',
      background: "url('https://avatars.githubusercontent.com/u/94123521?s=38') no-repeat left",
      backgroundSize: '38px',
      fontWeight: 550,
    }}>
      Milkdrinkers
    </div>
  ),
  project: {
    link: 'https://github.com/milkdrinkers',
  },
  chat: {
    link: 'https://discord.athyrium.eu',
  },
  docsRepositoryBase: 'https://github.com/milkdrinkers/milkdrinkers.github.io/blob/main',
  footer: {
    text: 'Milkdrinkers',
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter, title } = useConfig();
    const url = `https://milkdrinkers.github.io${asPath}`;
    const description = frontMatter.description || "Documentation for all Milkdrinkers projects";

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/static/milk.ico" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:url" content={url} />
      </>
    );
  },
  darkMode: true,
  useNextSeoProps: () => {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Milkdrinkers'
      }
    }
  }
}

export default config

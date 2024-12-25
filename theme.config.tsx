import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: (
    <div className="flex flex-row items-center">
      <img src='https://avatars.githubusercontent.com/u/94123521?s=38' alt='Logo' width='30' />
      <span className='ml-2 text-xl font-black'>Milkdrinkers</span>
    </div>
  ),
  project: {
    link: 'https://github.com/milkdrinkers',
  },
  chat: {
    link: 'https://discord.athyrium.eu',
  },
  sidebar: {
    toggleButton: true
  },
  docsRepositoryBase: 'https://github.com/milkdrinkers/milkdrinkers.github.io/blob/main',
  footer: {
    component: () => {
      return (
        <>
        </>
      )
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    
    const title = frontMatter.title ? `${frontMatter.title} - Milkdrinkers Docs` : 'Milkdrinkers Docs';   
    const description = frontMatter.description ?? "Documentation for all Milkdrinkers projects.";
    
    const baseUrl = process.env.NODE_ENV === 'production' ? 'https://milkdrinkers.github.io/' : 'http://localhost:3003';
    const pageUrl = `${baseUrl}${asPath}`;
    
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="Content-Language" content="en" />

        <link rel="icon" href="/static/milk.ico" />
        <link rel="icon" type="image/x-icon" href="/static/milk.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/milk.ico" />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </>
    );
  },
  darkMode: true,
}

export default config

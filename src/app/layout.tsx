import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
// Required for theme styles, previously was imported under the hood
// import 'nextra-theme-docs/style.css';
import { NextraMetadata } from 'nextra';
import "./styles.css"

export const metadata: NextraMetadata = {
    // ... your metadata API
    // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: {
        default: 'Milkdrinkers Documentation',
        template: '%s | Milkdrinkers Docs'
    },
    description: 'Documentation for all Milkdrinkers projects.',
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/static/milk.ico',
        apple: '/static/milk.ico',
    },
    openGraph: {
        url: 'https://docs.milkdrinkers.dev',
        siteName: 'Milkdrinkers Docs',
        locale: 'en_US',
        type: 'website',
    }
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = <Navbar
    logo={
        <div className="flex flex-row items-center">
            <img src='https://avatars.githubusercontent.com/u/94123521?s=38' alt='Logo' width='30' />
            <span className='!ml-2 text-xl font-black'>Milkdrinkers</span>
        </div>
    }
    projectLink="https://github.com/milkdrinkers"
    chatLink='https://discord.athyrium.eu'
/>;
const footer = (
    <Footer className="flex-col items-center md:items-start">
        {new Date().getFullYear()} © Milkdrinkers.
    </Footer>
);

export default async function RootLayout({ children }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head>
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Layout
                    // banner={banner}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/milkdrinkers/docs.milkdrinkers.dev/blob/main"
                    editLink="Edit this page on GitHub"
                    sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
                    footer={footer}
                    darkMode={true}
                // ...Your additional theme config options
                >
                    {children}
                </Layout>
            </body>
        </html>
    );
}
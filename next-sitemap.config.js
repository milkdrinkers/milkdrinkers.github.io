/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://docs.milkdrinkers.dev/',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: './out',
    exclude: ['/error/*']
};
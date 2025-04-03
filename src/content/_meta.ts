import { NextraMetadata } from 'nextra';

export default {
    index: { 
        type: "page",
        display: "hidden",
        theme: {
            breadcrumb: true,
            sidebar: true,
            footer: true,
        }, 
    },
    colorparser: {
        type: "page",
    },
    crate: {
        type: "page",
    },
    javasemver: {
        type: "page",
    },
    threadutil: {
        type: "page",
    },
    versionwatch: {
        type: "page",
    },
    wordweaver: {
        type: "page",
    },
    about: {
        type: "page"
    },
    contact: {
        title: "Contact",
        type: "page",
        href: "https://github.com/milkdrinkers/milkdrinkers.github.io",
    },
} as NextraMetadata;
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
    threadutil: {
        type: "page",
    },
    javasemver: {
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
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./theme.config.tsx",
        "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
        "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
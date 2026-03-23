/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: "rgb(var(--primary))",
        accent: "rgb(var(--accent))",
        card: "rgb(var(--card))",
            }
        },
    },
    plugins: [],
};

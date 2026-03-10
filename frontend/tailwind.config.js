/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                foreground: '#ededed',
                primary: {
                    DEFAULT: '#3b82f6',
                    dark: '#2563eb',
                },
                card: {
                    DEFAULT: 'rgba(23, 23, 23, 0.8)',
                    border: 'rgba(255, 255, 255, 0.1)',
                }
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}

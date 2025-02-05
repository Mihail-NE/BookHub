/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('./src/shared/assets/hero.jpg')",
            },
            fontFamily: {
                raleway: ["Raleway", "sans-serif"],
                josefin: ["Josefin Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};

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
            screens: {
                mobile: { max: "699px", min: "300px" },
                tablet: { max: "1279px" },
            },
        },
    },
    plugins: [],
};

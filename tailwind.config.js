module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                fancy: ['"Poppins"', "sans-serif"],
                title: ['"Orbitron"', "sans-serif"],
            },
            animation: {
                fadeIn: "fadeIn 1.5s ease-in-out",
            },
            keyframes: {
                fadeIn: {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
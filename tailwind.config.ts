import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "var(--color-bg)",
                surface: "var(--color-surface)",
                border: "var(--color-border)",
                accent: "var(--color-accent)",
                "accent-dim": "var(--color-accent-dim)",
                muted: "var(--color-muted)",
                light: "var(--color-light)",
            },
            fontFamily: {
                display: ["var(--font-syne)", "sans-serif"],
                mono: ["var(--font-jetbrains)", "monospace"],
                body: ["var(--font-inter)", "sans-serif"],
            },
            animation: {
                "fade-up": "fadeUp 0.6s ease forwards",
                blink: "blink 1s step-end infinite",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                blink: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
            },
        },
    },
    plugins: [],
};
export default config;

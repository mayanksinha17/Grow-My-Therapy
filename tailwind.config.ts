import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: "var(--theme-bg)",
          "bg-secondary": "var(--theme-bg-secondary)",
          "bg-card": "var(--theme-bg-card)",
          "bg-accent": "var(--theme-bg-accent)",
          "bg-dark": "var(--theme-bg-dark)",
          text: "var(--theme-text)",
          "text-muted": "var(--theme-text-muted)",
          "text-light": "var(--theme-text-light)",
          primary: "var(--theme-primary)",
          "primary-hover": "var(--theme-primary-hover)",
          secondary: "var(--theme-secondary)",
          accent: "var(--theme-accent)",
          border: "var(--theme-border)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      screens: {
        xs: "430px",
      },
    },
  },
  plugins: [],
};

export default config;

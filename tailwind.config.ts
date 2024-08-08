import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        prompt: ["var(--font-prompt)", "sans-serif"],
      },
      colors: {
        primary: "#5E1EE5",
      },
      backgroundImage: {
        "mobile-main": "url('/mobile.png')",
      },
    },
  },
  plugins: [],
};
export default config;

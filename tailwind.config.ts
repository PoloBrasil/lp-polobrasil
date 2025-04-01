import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green_light: "#7ACC00",
        green_dark: "#338042",
        lime: "#A8F05E",
        grey: "#DADADA",
      },
    },
  },
  plugins: [],
} satisfies Config;

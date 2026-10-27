import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Пастельная радуга
        pastel: {
          pink: "#FFB3BA",
          peach: "#FFDFBA",
          lemon: "#FFF5BA",
          mint: "#BAFFC9",
          sky: "#BAE1FF",
          lavender: "#E8BEFA",
        },
        ink: "#3A3A3A", // Тёмно-серый для текста
      },
      fontFamily: {
        sans: ["var(--font-albert-sans)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"], // Для заголовков
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)', // Мягкая тень
      }
    },
  },
  plugins: [],
};
export default config;
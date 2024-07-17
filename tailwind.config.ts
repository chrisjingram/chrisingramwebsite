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
        "bright-purple": {
          DEFAULT: "#1F00DE"
        },
        "bright-green": {
          DEFAULT: "#1CD45B"
        }
      }
    },
  },
  plugins: [],
};
export default config;

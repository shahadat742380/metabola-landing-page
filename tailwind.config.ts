import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D8079",
        background: "#E1FFFD",
        gray_: "#2F2F2F",
        black_: "#111111",
        stock: "#E4E4E7",
      },
    },
  },
  plugins: [],
};
export default config;

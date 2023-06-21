/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: {
          50: "#FFFFFF",
          100: "#FCFCFC",
          200: "#FAFAFA",
          300: "#FAFAFA",
          400: "#F7F7F7",
          500: "#F5F5F5",
          600: "#C4C4C4",
          700: "#949494",
          800: "#616161",
          900: "#303030",
          950: "#1A1A1A",
        },
        black: {
          50: "#E8E8E8",
          100: "#D4D4D4",
          200: "#A6A6A6",
          300: "#7A7A7A",
          400: "#4F4F4F",
          500: "#222222",
          600: "#1C1C1C",
          700: "#141414",
          800: "#0D0D0D",
          900: "#080808",
          950: "#030303",
        },
        blue: {
          50: "#EBF3FE",
          100: "#D8E6FD",
          200: "#B1CEFB",
          300: "#8AB5FA",
          400: "#639CF8",
          500: "#3B82F6",
          600: "#0B60EA",
          700: "#0848B0",
          800: "#053075",
          900: "#03183B",
          950: "#010C1D",
        },
        green: {
          50: "#E5FAF5",
          100: "#CFF7EC",
          200: "#9BEED8",
          300: "#6BE5C5",
          400: "#37DCB0",
          500: "#20B990",
          600: "#1A9473",
          700: "#147158",
          800: "#0D4A3A",
          900: "#07271F",
          950: "#03110E",
        },
      },
    },
  },
  plugins: [],
};

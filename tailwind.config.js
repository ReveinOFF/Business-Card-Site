/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "red-center": "0 0 10px rgb(239 68 68);",
        "load-1": "0 4px 0 red inset",
        "load-2": "0 0 10px 4px rgba(81, 81, 81, 0.3) inset",
      },
      fontSize: {
        "mega-size": "17rem",
      },
      letterSpacing: {
        low: "-4px",
        2: "0.2em",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)"],
        tthb: ["var(--font-tthoves-bold)"],
        tthxb: ["var(--font-tthoves-xbold)"],
      },
    },
  },
  plugins: [],
};

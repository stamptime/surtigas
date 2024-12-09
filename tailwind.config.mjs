/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      background: "#1B2A4F",
      magenta: "#E50A56",
      celeste: "#2580C3",
      orange: "#EB670A",
      green: "#75B62E",
      yellow: "#F6A505",
      white: "#FFF",
    },
    extend: {
      fontFamily: {
        sans: ["SourceSansPro", "ui-sans-serif", "system-ui"],
        variable: ["SourceSansVariable", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

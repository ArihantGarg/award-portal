/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [require("flowbite/plugin")],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: "#F7FBFD",
          100: "#E7F8FD",
          200: "#C2E8FB",
          300: "#9AD1FB",
          400: "#626AFB",
          500: "#3178FA",
          600: "#2054F4",
          700: "#1C42DE",
          800: "#1733AB",
          900: "#132983",
        },
      },
    },
  },
};

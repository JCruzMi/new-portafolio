/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.svelte", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Geist"],
      },
    },
  },
  plugins: [require("daisyui")],
};

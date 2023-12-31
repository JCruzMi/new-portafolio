/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Geist"],
      },
      colors: {
        background: "#010101",
        surface: "rgba(20, 20, 20, 1)",
        primary: "#007acc",
        text: "#ffffff",
        secondary: "#FF9800",
        accent: "#FF5722",
        error: "#f44336",
        warning: "#ff6e48",
        info: "#00fff1",
        success: "#46fcb4",
      },
    },
  },
  plugins: [require("daisyui")],
};

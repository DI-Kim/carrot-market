/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", //! class => 유저가 버튼을 통한 수정, media => 기기 default 모드에 따라 자동으로 정해짐
  plugins: [require("@tailwindcss/forms")],
};

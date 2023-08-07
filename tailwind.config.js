/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#171717",
        lightGray: "#1b1b1b",
        mainGreen: "#09b54e",
      },
    },
  },
  plugins: [],
};

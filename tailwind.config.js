/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

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
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
    }),
  ],
};

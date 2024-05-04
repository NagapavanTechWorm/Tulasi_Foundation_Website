/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          caveat: ['Caveat', 'cursive'], // Add the Caveat font family
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a91a1f", // Adjusted for a deep red color for Kumkum
          "secondary": "#f1c40f", // Adjusted for a vibrant yellow color for Pasupu
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}

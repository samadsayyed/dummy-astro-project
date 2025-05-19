/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FCD34D",
        "accent-dark": "#F59E0B",
      },
      fontFamily: {
        sans: ["'Nunito', sans-serif"],
        heading: ["'Antonio', sans-serif"],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '0% 0' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite linear'
      }
    },
  },
  plugins: [],
}
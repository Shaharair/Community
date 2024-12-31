import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth: {
      Container: "1280px"
    }, 
    fontFamily: {
      'Roboto': ['Roboto', 'serif',]
    },
    // backgroundImage: {
    //   'banner': "url('./src/assets/banner.png')",
    //   'background': "url('./src/assets/banner2.png')"
    // },
    backgroundImage: {
      'banner': "url('/src/assets/banner.png')",
      'background': "url('/src/assets/banner2.png')",
    }

  },
  plugins: [],
}


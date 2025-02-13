/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans : ['Roboto', 'sans-serif']
      },
      colors: {
        "primary" : "#021831",
        "secondary" : "#529bdd",
        "neutral" : "#e0e6ea",
        "cta-button": "#ffbd59",
        'aruku-dark-blue': '#0A0F2C',
        'aruku-light-blue': '#6AAFE6',
        'aruku-silver': '#C0C0C0',
        'aruku-dark-blue-gradient': '#1F2A68',
      }
    },
  },
  plugins: [],
}


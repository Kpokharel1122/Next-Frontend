module.exports = {
  content: [
    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",

  ],
  theme: {
    extend: {
      colors:{
        primary:"#299e8c",
        // primarysec:"#e8b715"
      }
    },
  },
  plugins: [],
}
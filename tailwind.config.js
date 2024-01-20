/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
      
         "bg-orange":"#8D2813",
      },
      textColor:{
        "text-orange":"#8D2813",
         
      },
    
    },
  },
  plugins: [],
}
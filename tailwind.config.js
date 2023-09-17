/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f4b7ca",
        
"secondary": "#6c1fd1",
        
"accent": "#e8477a",
        
"neutral": "#282839",
        
"base-100": "#4A4653",
        
"info": "#5290DA",
        
"success": "#58DFBD",
        
"warning": "#965908",
        
"error": "#F4717E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


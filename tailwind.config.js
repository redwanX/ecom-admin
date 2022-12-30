/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {
           
        "primary": "#88aaf3",
                  
        "secondary": "#a6aab4",
                  
        "accent": "#f7f7f7"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

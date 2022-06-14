const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'norse' : ['norse', ...defaultTheme.fontFamily.mono]    
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

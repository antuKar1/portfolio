/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      
    },
    extend: {
      backgroundImage: {
        'pattern': "url('./src/assets/pattern.svg')",
        'pattern_2': "url('./src/assets/patt.svg')",
        
      },
      listStyleImage: {
        arrow: 'url("./src/assets/right.png")',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [require('daisyui'),
  require('flowbite/plugin'),
   function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* For modern browsers */
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */

          '&::-webkit-scrollbar': {
            display: 'none', /* Safari and Chrome */
          },
        },
      });
    },
  ],
}


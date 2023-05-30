/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      xs: '400px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
      xxxl:'1600px'
    },
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}


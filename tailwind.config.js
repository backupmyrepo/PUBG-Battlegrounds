/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
    "./*.html", "./ecommerce/*.html", "./assets/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
    require("tailgrids/plugin")

  ],
});


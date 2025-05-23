// postcss.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // <-- notice the parentheses!
    require('autoprefixer'),
  ],
};
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // tailwindcss doc app files from website
    "./node_modules/flowbite/**/*.js", // Flowbite's components
    flowbite.content(), // Include Flowbite's components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Include Flowbite's plugin
  ],
};

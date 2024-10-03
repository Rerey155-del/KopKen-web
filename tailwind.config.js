// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {colors: {
      customBg: '#ECD6BD',
      merah :  '#A82126' ,
      navbar : '#F7EDE3',
      abu2 : '#2D2D2D'// Warna background kustom
    },},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

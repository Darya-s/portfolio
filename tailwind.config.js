/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      main: '#22092C',
      secondary: '#872341',
      third: '#BE3144',
      fourth: '#F05941',
      text: '#FFF6F6',
      hover: '#F7EFE5',
      black: '#000000',
    },
    safelist: ['animate-[drop-in_0.5s]', 'animate-[drop-out_0.5s]'],
  },
  plugins: [],
};

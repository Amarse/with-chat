const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      gray: colors.neutral,
      rose: colors.rose,
      emerald: colors.emerald,
      yellow: colors.amber,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  // plugins: [require('flowbite/plugin')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2sm': ['10px', '14px'],
        sm: ['12px', '16px'],
        '2base': ['14px', '14px'],
        base: ['14px', '20px'],
        lg: ['16px', '22px'],
        xl: ['20px', '26px'],
        '2xl': ['24px', '30px'],
        '3xl': ['30px', '38px'],
      },
      colors: {
        primary: '#4C79F0',
        'primary-dark': '#4C79F0',
        'primary-light': '#E5ECFF',
        'primary-border': '#B2CAF2',

        'primary-black': '#272D38',
        'primary-dark-grey': '#42444A',
        'primary-grey': '#7781A3',
        'primary-light-grey': '#E4E4E4',
        'primary-white': '#F7F7FB',

        coral: '#B2CAF2',
        'dark-coral': '#FD7166',
        'light-coral': '#FFE8E6',
        'border-coral': '#FDBEB9',

        'grey-1': '#ecedef',
        'grey-2': '#8e949f',
        'grey-3': '#444444',
      },
      fontFamily: {
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

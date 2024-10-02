import { AboutPayDelivery } from './src/widgets/AboutPayDelivery/AboutPayDelivery';
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        white: 'var(--white)',
        heavyGray: 'var(--heavy-gray)',
        black: 'var(--black)',
        middleGray: 'var(--middle-gray)'
      },
      backgroundImage: {
        spiner: "linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat",
        bag: 'url("./public/home/bag-1.png")',
        eyeBag: 'url("./public/home/bag-2.png")',

      },
      margin: {
        '1920': '84px',
        '1440': '63px',
        '768': '58px',
        '428': '31px'

      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      "atyptext": ["Atyptext", "sans-serif"],
      "AlibabaPuhuiti": ["AlibabaPuhuiti", "sans-serif"]

    },
    screens: {
      'md': "428px",
      'lg': '768px',
      'xl': '1440px',
      '2xl': '1920px'
    }
  },
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  plugins: [],
};
export default config;



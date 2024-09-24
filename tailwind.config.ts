import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        white: 'var(--white)'
      },
      backgroundImage: {
        spiner: "linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat"
      }
    },
    screens: {
      'md': "768px",
      'lg': '1024px',
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

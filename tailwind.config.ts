import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient': 'linear-gradient(184deg, rgba(22,22,22,1) 69%, rgba(0,0,0,1) 100%)'
      },
      colors: {
        'primary-color': '#161616',
        'line-gray': '#686868',
        'secondary-color': '##343434',
        'main-gray': '#A7A7A7',
        'shade-gray': '#616161'
      }
    },
  },
  plugins: [],
}
export default config

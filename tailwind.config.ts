import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#C9F2F3',
        'sub-color': '#2A3232',
        'header-color': '#EDEFE1',
        'font-color': '#374151'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config

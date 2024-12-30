import type { Config } from 'tailwindcss';
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#6bc2c3',
        'sub-color': '#2A3232',
        'font-color': '#374151'
      },
      fontFamily: {
        custom: ['sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addVariant }) {
      addVariant(
        "hover",
        "@media(hover:hover){ &:where(:any-link, :enabled, div, summary):hover }"
      )
      addVariant('where', ':where(&)')
    })
  ],
}
export default config

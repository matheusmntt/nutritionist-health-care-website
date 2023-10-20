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
        darkGreen15: '#1A3129',
        darkGreen20: '#234338',
        darkGreen40: '#468671',
        absoluteWhite: '#FFFFFF',
        greenShade70: '#CBEA7B',
        greenShade85: '#E5F5BD',
        greenShade97: '#FAFDF2',
        greenShade95: '#F6FBE9',
        greyShade15: '#262626',
      },
    },
  },
  plugins: [],
}
export default config

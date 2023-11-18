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
        'navy': '#0e4f74',
        'grey': '#48484A',
        'light-blue': '#a5dbdb',
        'yellow': '#ffd889',
        'peach': '#f9ceb3',
        'light-grey': '#9e9d9e',
        'teal': '#278b93',
        'pink': '#f8b4bd',
        'light-green': '#bfe0bb',
        'purple': '#955683',
        'green': '#7cb65e'
      }
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071d3b',
        gold: '#d5aa45',
      },
    },
  },
  plugins: [],
} satisfies Config

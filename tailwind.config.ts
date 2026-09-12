import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#061426',
          900: '#071a33',
          800: '#0d2a4d',
        },
        gold: {
          400: '#f6cf6b',
          500: '#d9ad3f',
        },
      },
      boxShadow: {
        glow: '0 0 50px rgba(246, 207, 107, 0.18)',
      },
    },
  },
  plugins: [],
} satisfies Config

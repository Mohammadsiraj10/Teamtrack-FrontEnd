/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './layers/**/*.{vue,js,ts}',
    './shared/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        teamtrack: {
          blue: '#2563EB',
          dark: '#1E40AF',
          light: '#EFF6FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

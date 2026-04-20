/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Quicksand', 'sans-serif'],
        'fredoka': ['Fredoka', 'cursive'],
      },
      colors: {
        'lavender': '#E8D5F5',
        'mint': '#D5F5E3',
        'peach': '#FDE2D3',
        'sky': '#D3E5FD',
        'pink': '#FDD3E8',
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '48px',
        '6xl': '64px',
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(232, 213, 245, 0.5)',
      },
    },
  },
  plugins: [],
}
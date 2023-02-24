/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-walsheim)', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        semiblack: '#060809',
      },
      zIndex: {
        base: 1,
        md: 2,
        lg: 3,
        xl: 4,
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

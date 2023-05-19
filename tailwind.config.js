/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          dark: 'hsl(229, 25%, 31%)',
          score: 'hsl(229, 64%, 46%)',
          outline: 'hsl(217, 16%, 45%)',
        },
      },
      backgroundImage: {
        main: 'radial-gradient(circle at 50% 0%, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        scissors: 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        paper: 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        rock: 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        lizard: 'linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
        spock: 'linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
      },
      fontFamily: {
        primary: "'Barlow Semi Condensed', sans-serif",
      },
    },
  },
  plugins: [],
};

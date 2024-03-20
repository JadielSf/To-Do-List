/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darkBlue': '#051951',
      'ligthBlue': 'hsl(220, 51%, 42%)',
      'pinkEfect':'hsl(299, 100%, 60%)',
      'blueEfect':'hsl(180, 100%, 50%)',
      'grayPrimary':'#445696',
      'graySecond':'#9CA3AF',
      'withPrimary':'hsl(50, 100%, 99%)',
      'withSecond':'#98B6FF',
      


    },
    extend: {
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '50px',
      }
    },
  },
  plugins: [],
}


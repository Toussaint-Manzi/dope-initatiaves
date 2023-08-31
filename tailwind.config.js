/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xsm': {'min': '480px'},    
        'msm': {'min': '700px'},
        'lg': {'max': '1025px'},
        'larg': {'max': '950px'},
        'md': {'max': '767px'},
        'sm': {'max': '700px'},
        'xtra': {'max': '400px'},    
        'lgm': {'min': '1025px'},
        '2xl': {'max': '1535px'},
        'xs': {'max': '500px'},
        'xl': {'max': '1279px'},

      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

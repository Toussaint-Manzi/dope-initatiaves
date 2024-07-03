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
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'xsm': {'min': '480px'},    
        'msm': {'min': '700px'},
        'lg': {'max': '1025px'},
        'larg': {'max': '950px'},
        'md': {'max': '867px'},
        'sm': {'max': '700px'},
        'mdd': {'min': '867px'},
        'lgm': {'min': '1025px'},
        'xs': {'max': '500px'},
        'xtra': {'max': '400px'},    
      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark:'rgba(0,0,0,0.7)'
      },
    },
  },
  plugins: [],
}

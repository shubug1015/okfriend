module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      notoSans: ['Noto Sans, sans-serif'],
      notoSansKr: ['Noto Sans KR, sans-serif'],
      nexon: ['NEXON Lv1 Gothic OTF'],
      nexonBold: ['NEXON Lv1 Gothic OTF Bold'],
      quicksand: ['Quicksand', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      '2xl': { max: '15350px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '12790px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '10230px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '1279px' },
      // md: { max: '1440px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};

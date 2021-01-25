const spacing = () => {
  const obj = { px: '1px', 'g-sm': '2.5rem', 'g-md': '8rem' }
  for(var i=0; i<=25; i+=0.5){
    obj[i.toString()] = `${i.toFixed(1)}rem`;
  }
  return obj;
}
const fontSize = () => {
  const obj = {};
  for(var i=10; i<=60; i+=1){
    const value = i / 10;
    if(Number.isInteger(value)){
      obj[value.toString()] = `${value.toString()}rem`;
    }else{
      obj[value.toFixed(1)] = `${value.toFixed(1)}rem`;
    }
  }
  return obj;
}

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#000230',
          light: '#141543'
        },
        grey: '#b2b3c2'
      },
      lineHeight: {
        'chill': '1.73'
      }
    },
    spacing: spacing(),
    fontSize: fontSize(),
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1650px'
    },
    maxWidth: {
      '72': '72rem',
      '92': '92rem',
      ...defaultTheme.maxWidth
    },
    fontFamily: {
      mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

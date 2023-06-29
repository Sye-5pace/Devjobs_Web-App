/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    '*.js',
    '*.html'
  ],
  theme: {
    fontFamily:{
      'fredoka':['Fredoka','sans-serif'],
    },
    colors: {
      'royal-blue':'#5864e1',
      'vulcan':'#121721',
      'anakiwa' :'#9dcdff',
      'baymany':'#21437d',
      'athens-gray':'#f4f6f8'

      //#5964e0 - load-more, theme-switcher,search ,country
      //#6e8098 - filter icon
      //#9daec2
      //#f4f6f8 -bg
      //#ccc9d4
      //#9dcdff - Maker/onhover for role text
      //#21437d time color
      //#19202d
      //#121721

    },
    screens:{
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'782px'},
      'laptop': {'min':'782.1px'}
    },
    extend: {},
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ]
}


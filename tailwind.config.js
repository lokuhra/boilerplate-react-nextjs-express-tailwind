/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

// let defaultConfig = require('tailwindcss/defaultConfig')()


/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

let colors = {
  'transparent': 'transparent',

  'black': '#22292f',
  'grey-darkest': '#3d4852',
  'grey-darker': '#606f7b',
  'grey-dark': '#8795a1',
  'grey': '#b8c2cc',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f1f5f8',
  'grey-lightest': '#f8fafc',
  'white': '#ffffff',

  'red-darkest': '#3b0d0c',
  'red-darker': '#621b18',
  'red-dark': '#cc1f1a',
  'red': '#e3342f',
  'red-light': '#ef5753',
  'red-lighter': '#f9acaa',
  'red-lightest': '#fcebea',

  'orange-darkest': '#462a16',
  'orange-darker': '#613b1f',
  'orange-dark': '#de751f',
  'orange': '#f6993f',
  'orange-light': '#faad63',
  'orange-lighter': '#fcd9b6',
  'orange-lightest': '#fff5eb',

  'yellow-darkest': '#453411',
  'yellow-darker': '#684f1d',
  'yellow-dark': '#f2d024',
  'yellow': '#ffed4a',
  'yellow-light': '#fff382',
  'yellow-lighter': '#fff9c2',
  'yellow-lightest': '#fcfbeb',

  'green-darkest': '#0f2f21',
  'green-darker': '#1a4731',
  'green-dark': '#1f9d55',
  'green': '#38c172',
  'green-light': '#51d88a',
  'green-lighter': '#a2f5bf',
  'green-lightest': '#e3fcec',

  'teal-darkest': '#0d3331',
  'teal-darker': '#20504f',
  'teal-dark': '#38a89d',
  'teal': '#4dc0b5',
  'teal-light': '#64d5ca',
  'teal-lighter': '#a0f0ed',
  'teal-lightest': '#e8fffe',

  'blue-darkest': '#12283a',
  'blue-darker': '#1c3d5a',
  'blue-dark': '#2779bd',
  'blue': '#3490dc',
  'blue-light': '#6cb2eb',
  'blue-lighter': '#bcdefa',
  'blue-lightest': '#eff8ff',

  'indigo-darkest': '#191e38',
  'indigo-darker': '#2f365f',
  'indigo-dark': '#5661b3',
  'indigo': '#6574cd',
  'indigo-light': '#7886d7',
  'indigo-lighter': '#b2b7ff',
  'indigo-lightest': '#e6e8ff',

  'purple-darkest': '#21183c',
  'purple-darker': '#382b5f',
  'purple-dark': '#794acf',
  'purple': '#9561e2',
  'purple-light': '#a779e9',
  'purple-lighter': '#d6bbfc',
  'purple-lightest': '#f3ebff',

  'pink-darkest': '#451225',
  'pink-darker': '#6f213f',
  'pink-dark': '#eb5286',
  'pink': '#f66d9b',
  'pink-light': '#fa7ea8',
  'pink-lighter': '#ffbbca',
  'pink-lightest': '#ffebef',
}

module.exports = {

  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | The color palette defined above is also assigned to the "colors" key of
  | your Tailwind config. This makes it easy to access them in your CSS
  | using Tailwind's config helper. For example:
  |
  | .error { color: config('colors.red') }
  |
  */

  colors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

  screens: {
    'sm': '576px',
    'cd': '769px',
    'md': '1024px',
    'lg': '1216px',
    'xl': '1408px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  |
  */

  fonts: {
    'sans': [
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    'serif': [
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    'mono': [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ]
  },


  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  |
  */

  textSizes: {
    'xs': '.75rem',     // 12px
    'sm': '.875rem',    // 14px
    'base': '1rem',     // 16px
    'lg': '1.125rem',   // 18px
    'xl': '1.25rem',    // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
      //agregados
      '025':'0.25rem',
      '050':'0.5rem',
      '075':'0.75rem',
      '1':'1rem',
      '125':'1.25rem',
      '150':'1.5rem',
      '175':'1.75rem',
      '2':'2rem',
      '225':'2.25rem',
      '250':'2.5rem',
      '275':'2.75rem',
      '3':'3rem',
      '325':'3.25rem',
      '350':'3.5rem',
      '375':'3.75rem',
      '4':'4rem',
      '425':'4.25rem',
      '450':'4.5rem',
      '475':'4.75rem',
      '5':'5rem',
      '525':'5.25rem',
      '550':'5.5rem',
      '575':'5.75rem',
      '6':'6rem',
      '625':'6.25rem',
      '650':'6.5rem',
      '675':'6.75rem',
      '7':'7rem',
      '725':'7.25rem',
      '750':'7.5rem',
      '775':'7.75rem',
      '8':'8rem',
      '825':'8.25rem',
      '850':'8.5rem',
      '875':'8.75rem',
      '9':'9rem',
      '925':'9.25rem',
      '950':'9.5rem',
      '975':'9.75rem',
      '10':'10rem',
      '1025':'10.25rem',
      '1050':'10.5rem',
      '1075':'10.75rem',
      '11':'11rem',
      '1125':'11.25rem',
      '1150':'11.5rem',
      '1175':'11.75rem',
      '12':'12rem',
      '1225':'12.25rem',
      '1250':'12.5rem',
      '1275':'12.75rem',
      '13':'13rem',
      '1325':'13.25rem',
      '1350':'13.5rem',
      '1375':'13.75rem',
      '14':'14rem',
      '1425':'14.25rem',
      '1450':'14.5rem',
      '1475':'14.75rem',
      '15':'15rem',
  },


  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  |
  */

  fontWeights: {
    'hairline': 100,
    'thin': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'extrabold': 800,
    'black': 900,
  },


  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  |
  */

  leading: {
    'none': 1,
    'tight': 1.25,
    'normal': 1.5,
    'loose': 2,
  },


  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  |
  */

  tracking: {
    'tight': '-0.05em',
    'normal': '0',
    'wide': '0.05em',
  },


  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  |
  */

  textColors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  |
  */

  backgroundColors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background sizes. We provide some common
  | values that are useful in most projects, but feel free to add other sizes
  | that are specific to your project here as well.
  |
  | Class name: .bg-{size}
  |
  */

  backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
  },


  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  |
  */

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
      '3':'3px',
    '4': '4px',
      '5':'5px',
      '6':'6px',
      '7':'7px',
    '8': '8px',
      '9':'9px',
      '10':'10px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  |
  */

  borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),


  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | If your scale includes a `0` value to reset already rounded corners, it's
  | a good idea to put it first so other values are able to override it.
  |
  | Class name: .rounded{-side?}{-size?}
  |
  */

  borderRadius: {
    'none': '0',
    'sm': '.125rem',
    default: '.25rem',
    'lg': '.5rem',
    'full': '9999px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your width utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale, a percentage
  | based fraction scale, plus some other common use-cases. You
  | can, of course, modify these values as needed.
  |
  |
  | It's also worth mentioning that Tailwind automatically escapes
  | invalid CSS class name characters, which allows you to have
  | awesome classes like .w-2/3.
  |
  | Class name: .w-{size}
  |
  */

  width: {
    'auto': 'auto',
    'px': '1px',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'full': '100%',
    'screen': '100vw',
      '025':'0.25rem',
      '050':'0.5rem',
      '075':'0.75rem',
      '1':'1rem',
      '125':'1.25rem',
      '150':'1.5rem',
      '175':'1.75rem',
      '2':'2rem',
      '225':'2.25rem',
      '250':'2.5rem',
      '275':'2.75rem',
      '3':'3rem',
      '325':'3.25rem',
      '350':'3.5rem',
      '375':'3.75rem',
      '4':'4rem',
      '425':'4.25rem',
      '450':'4.5rem',
      '475':'4.75rem',
      '5':'5rem',
      '525':'5.25rem',
      '550':'5.5rem',
      '575':'5.75rem',
      '6':'6rem',
      '625':'6.25rem',
      '650':'6.5rem',
      '675':'6.75rem',
      '7':'7rem',
      '725':'7.25rem',
      '750':'7.5rem',
      '775':'7.75rem',
      '8':'8rem',
      '825':'8.25rem',
      '850':'8.5rem',
      '875':'8.75rem',
      '9':'9rem',
      '925':'9.25rem',
      '950':'9.5rem',
      '975':'9.75rem',
      '10':'10rem',
      '1025':'10.25rem',
      '1050':'10.5rem',
      '1075':'10.75rem',
      '11':'11rem',
      '1125':'11.25rem',
      '1150':'11.5rem',
      '1175':'11.75rem',
      '12':'12rem',
      '1225':'12.25rem',
      '1250':'12.5rem',
      '1275':'12.75rem',
      '13':'13rem',
      '1325':'13.25rem',
      '1350':'13.5rem',
      '1375':'13.75rem',
      '14':'14rem',
      '1425':'14.25rem',
      '1450':'14.5rem',
      '1475':'14.75rem',
      '15':'15rem',
      '5/100':'5%',
      '10/100':'10%',
      '15/100':'15%',
      '20/100':'20%',
      '25/100':'25%',
      '30/100':'30%',
      '35/100':'35%',
      '40/100':'40%',
      '45/100':'45%',
      '50/100':'50%',
      '55/100':'55%',
      '60/100':'60%',
      '65/100':'65%',
      '70/100':'70%',
      '75/100':'75%',
      '80/100':'80%',
      '85/100':'85%',
      '90/100':'90%',
      '95/100':'95%',
      '100/100':'100%',


  },


  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your height utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale plus some other
  | common use-cases. You can, of course, modify these values as
  | needed.
  |
  | Class name: .h-{size}
  |
  */

  height: {
    'auto': 'auto',
    'px': '1px',
    'full': '100%',
    'screen': '100vh',
      '025':'0.25rem',
      '050':'0.5rem',
      '075':'0.75rem',
      '1':'1rem',
      '125':'1.25rem',
      '150':'1.5rem',
      '175':'1.75rem',
      '2':'2rem',
      '225':'2.25rem',
      '250':'2.5rem',
      '275':'2.75rem',
      '3':'3rem',
      '325':'3.25rem',
      '350':'3.5rem',
      '375':'3.75rem',
      '4':'4rem',
      '425':'4.25rem',
      '450':'4.5rem',
      '475':'4.75rem',
      '5':'5rem',
      '525':'5.25rem',
      '550':'5.5rem',
      '575':'5.75rem',
      '6':'6rem',
      '625':'6.25rem',
      '650':'6.5rem',
      '675':'6.75rem',
      '7':'7rem',
      '725':'7.25rem',
      '750':'7.5rem',
      '775':'7.75rem',
      '8':'8rem',
      '825':'8.25rem',
      '850':'8.5rem',
      '875':'8.75rem',
      '9':'9rem',
      '925':'9.25rem',
      '950':'9.5rem',
      '975':'9.75rem',
      '10':'10rem',
      '1025':'10.25rem',
      '1050':'10.5rem',
      '1075':'10.75rem',
      '11':'11rem',
      '1125':'11.25rem',
      '1150':'11.5rem',
      '1175':'11.75rem',
      '12':'12rem',
      '1225':'12.25rem',
      '1250':'12.5rem',
      '1275':'12.75rem',
      '13':'13rem',
      '1325':'13.25rem',
      '1350':'13.5rem',
      '1375':'13.75rem',
      '14':'14rem',
      '1425':'14.25rem',
      '1450':'14.5rem',
      '1475':'14.75rem',
      '15':'15rem',
      '1525':'15.25rem',
      '1550':'15.5rem',
      '1575':'15.75rem',
      '16':'16rem',
      '1625':'16.25rem',
      '1650':'16.5rem',
      '1675':'16.75rem',
      '17':'17rem',
      '1725':'17.25rem',
      '1750':'17.5rem',
      '1775':'17.75rem',
      '18':'18rem',
      '1825':'18.25rem',
      '1850':'18.5rem',
      '1875':'18.75rem',
      '19':'19rem',
      '1925':'19.25rem',
      '1950':'19.5rem',
      '1975':'19.75rem',
      '20':'20rem',
      '2025':'20.25rem',
      '2050':'20.5rem',
      '2075':'20.75rem',
      '21':'21rem',
      '2125':'21.25rem',
      '2150':'21.5rem',
      '2175':'21.75rem',
      '22':'22rem',
      '2225':'22.25rem',
      '2250':'22.5rem',
      '2275':'22.75rem',
      '23':'23rem',
      '2325':'23.25rem',
      '2350':'23.5rem',
      '2375':'23.75rem',
      '24':'24rem',
      '2425':'24.25rem',
      '2450':'24.5rem',
      '2475':'24.75rem',
      '25':'25rem',
      '5/100':'5%',
      '10/100':'10%',
      '15/100':'15%',
      '20/100':'20%',
      '25/100':'25%',
      '30/100':'30%',
      '35/100':'35%',
      '40/100':'40%',
      '45/100':'45%',
      '50/100':'50%',
      '55/100':'55%',
      '60/100':'60%',
      '65/100':'65%',
      '70/100':'70%',
      '75/100':'75%',
      '80/100':'80%',
      '85/100':'85%',
      '90/100':'90%',
      '95/100':'95%',
      '100/100':'100%',

  },


  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  |
  */

  minWidth: {
    '0': '0',
    'full': '100%',
      '025':'0.25rem',
      '050':'0.5rem',
      '075':'0.75rem',
      '1':'1rem',
      '125':'1.25rem',
      '150':'1.5rem',
      '175':'1.75rem',
      '2':'2rem',
      '225':'2.25rem',
      '250':'2.5rem',
      '275':'2.75rem',
      '3':'3rem',
      '325':'3.25rem',
      '350':'3.5rem',
      '375':'3.75rem',
      '4':'4rem',
      '425':'4.25rem',
      '450':'4.5rem',
      '475':'4.75rem',
      '5':'5rem',
      '525':'5.25rem',
      '550':'5.5rem',
      '575':'5.75rem',
      '6':'6rem',
      '625':'6.25rem',
      '650':'6.5rem',
      '675':'6.75rem',
      '7':'7rem',
      '725':'7.25rem',
      '750':'7.5rem',
      '775':'7.75rem',
      '8':'8rem',
      '825':'8.25rem',
      '850':'8.5rem',
      '875':'8.75rem',
      '9':'9rem',
      '925':'9.25rem',
      '950':'9.5rem',
      '975':'9.75rem',
      '10':'10rem',
      '1025':'10.25rem',
      '1050':'10.5rem',
      '1075':'10.75rem',
      '11':'11rem',
      '1125':'11.25rem',
      '1150':'11.5rem',
      '1175':'11.75rem',
      '12':'12rem',
      '1225':'12.25rem',
      '1250':'12.5rem',
      '1275':'12.75rem',
      '13':'13rem',
      '1325':'13.25rem',
      '1350':'13.5rem',
      '1375':'13.75rem',
      '14':'14rem',
      '1425':'14.25rem',
      '1450':'14.5rem',
      '1475':'14.75rem',
      '15':'15rem',
      '1525':'15.25rem',
      '1550':'15.5rem',
      '1575':'15.75rem',
      '16':'16rem',
      '1625':'16.25rem',
      '1650':'16.5rem',
      '1675':'16.75rem',
      '17':'17rem',
      '1725':'17.25rem',
      '1750':'17.5rem',
      '1775':'17.75rem',
      '18':'18rem',
      '1825':'18.25rem',
      '1850':'18.5rem',
      '1875':'18.75rem',
      '19':'19rem',
      '1925':'19.25rem',
      '1950':'19.5rem',
      '1975':'19.75rem',
      '20':'20rem',
      '2025':'20.25rem',
      '2050':'20.5rem',
      '2075':'20.75rem',
      '21':'21rem',
      '2125':'21.25rem',
      '2150':'21.5rem',
      '2175':'21.75rem',
      '22':'22rem',
      '2225':'22.25rem',
      '2250':'22.5rem',
      '2275':'22.75rem',
      '23':'23rem',
      '2325':'23.25rem',
      '2350':'23.5rem',
      '2375':'23.75rem',
      '24':'24rem',
      '2425':'24.25rem',
      '2450':'24.5rem',
      '2475':'24.75rem',
      '25':'25rem',
      '5/100':'5%',
      '10/100':'10%',
      '15/100':'15%',
      '20/100':'20%',
      '25/100':'25%',
      '30/100':'30%',
      '35/100':'35%',
      '40/100':'40%',
      '45/100':'45%',
      '50/100':'50%',
      '55/100':'55%',
      '60/100':'60%',
      '65/100':'65%',
      '70/100':'70%',
      '75/100':'75%',
      '80/100':'80%',
      '85/100':'85%',
      '90/100':'90%',
      '95/100':'95%',
      '100/100':'100%',

  },


  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  |
  */

  minHeight: {
    '0': '0',
    'full': '100%',
    'screen': '100vh',
      '025':'0.25rem',
      '050':'0.5rem',
      '075':'0.75rem',
      '1':'1rem',
      '125':'1.25rem',
      '150':'1.5rem',
      '175':'1.75rem',
      '2':'2rem',
      '225':'2.25rem',
      '250':'2.5rem',
      '275':'2.75rem',
      '3':'3rem',
      '325':'3.25rem',
      '350':'3.5rem',
      '375':'3.75rem',
      '4':'4rem',
      '425':'4.25rem',
      '450':'4.5rem',
      '475':'4.75rem',
      '5':'5rem',
      '525':'5.25rem',
      '550':'5.5rem',
      '575':'5.75rem',
      '6':'6rem',
      '625':'6.25rem',
      '650':'6.5rem',
      '675':'6.75rem',
      '7':'7rem',
      '725':'7.25rem',
      '750':'7.5rem',
      '775':'7.75rem',
      '8':'8rem',
      '825':'8.25rem',
      '850':'8.5rem',
      '875':'8.75rem',
      '9':'9rem',
      '925':'9.25rem',
      '950':'9.5rem',
      '975':'9.75rem',
      '10':'10rem',
      '1025':'10.25rem',
      '1050':'10.5rem',
      '1075':'10.75rem',
      '11':'11rem',
      '1125':'11.25rem',
      '1150':'11.5rem',
      '1175':'11.75rem',
      '12':'12rem',
      '1225':'12.25rem',
      '1250':'12.5rem',
      '1275':'12.75rem',
      '13':'13rem',
      '1325':'13.25rem',
      '1350':'13.5rem',
      '1375':'13.75rem',
      '14':'14rem',
      '1425':'14.25rem',
      '1450':'14.5rem',
      '1475':'14.75rem',
      '15':'15rem',
      '1525':'15.25rem',
      '1550':'15.5rem',
      '1575':'15.75rem',
      '16':'16rem',
      '1625':'16.25rem',
      '1650':'16.5rem',
      '1675':'16.75rem',
      '17':'17rem',
      '1725':'17.25rem',
      '1750':'17.5rem',
      '1775':'17.75rem',
      '18':'18rem',
      '1825':'18.25rem',
      '1850':'18.5rem',
      '1875':'18.75rem',
      '19':'19rem',
      '1925':'19.25rem',
      '1950':'19.5rem',
      '1975':'19.75rem',
      '20':'20rem',
      '2025':'20.25rem',
      '2050':'20.5rem',
      '2075':'20.75rem',
      '21':'21rem',
      '2125':'21.25rem',
      '2150':'21.5rem',
      '2175':'21.75rem',
      '22':'22rem',
      '2225':'22.25rem',
      '2250':'22.5rem',
      '2275':'22.75rem',
      '23':'23rem',
      '2325':'23.25rem',
      '2350':'23.5rem',
      '2375':'23.75rem',
      '24':'24rem',
      '2425':'24.25rem',
      '2450':'24.5rem',
      '2475':'24.75rem',
      '25':'25rem',
      '5/100':'5%',
      '10/100':'10%',
      '15/100':'15%',
      '20/100':'20%',
      '25/100':'25%',
      '30/100':'30%',
      '35/100':'35%',
      '40/100':'40%',
      '45/100':'45%',
      '50/100':'50%',
      '55/100':'55%',
      '60/100':'60%',
      '65/100':'65%',
      '70/100':'70%',
      '75/100':'75%',
      '80/100':'80%',
      '85/100':'85%',
      '90/100':'90%',
      '95/100':'95%',
      '100/100':'100%',

  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  |
  */

  maxWidth: {
    'xs': '20rem',
    'sm': '30rem',
    'cd': '38rem',
    'md': '40rem',
    'lg': '50rem',
    'xl': '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    'full': '100%',
      '025':'0.25rem',
      '050':'0.5rem',
      '075':'0.75rem',
      '1':'1rem',
      '125':'1.25rem',
      '150':'1.5rem',
      '175':'1.75rem',
      '2':'2rem',
      '225':'2.25rem',
      '250':'2.5rem',
      '275':'2.75rem',
      '3':'3rem',
      '325':'3.25rem',
      '350':'3.5rem',
      '375':'3.75rem',
      '4':'4rem',
      '425':'4.25rem',
      '450':'4.5rem',
      '475':'4.75rem',
      '5':'5rem',
      '525':'5.25rem',
      '550':'5.5rem',
      '575':'5.75rem',
      '6':'6rem',
      '625':'6.25rem',
      '650':'6.5rem',
      '675':'6.75rem',
      '7':'7rem',
      '725':'7.25rem',
      '750':'7.5rem',
      '775':'7.75rem',
      '8':'8rem',
      '825':'8.25rem',
      '850':'8.5rem',
      '875':'8.75rem',
      '9':'9rem',
      '925':'9.25rem',
      '950':'9.5rem',
      '975':'9.75rem',
      '10':'10rem',
      '1025':'10.25rem',
      '1050':'10.5rem',
      '1075':'10.75rem',
      '11':'11rem',
      '1125':'11.25rem',
      '1150':'11.5rem',
      '1175':'11.75rem',
      '12':'12rem',
      '1225':'12.25rem',
      '1250':'12.5rem',
      '1275':'12.75rem',
      '13':'13rem',
      '1325':'13.25rem',
      '1350':'13.5rem',
      '1375':'13.75rem',
      '14':'14rem',
      '1425':'14.25rem',
      '1450':'14.5rem',
      '1475':'14.75rem',
      '15':'15rem',
      '1525':'15.25rem',
      '1550':'15.5rem',
      '1575':'15.75rem',
      '16':'16rem',
      '1625':'16.25rem',
      '1650':'16.5rem',
      '1675':'16.75rem',
      '17':'17rem',
      '1725':'17.25rem',
      '1750':'17.5rem',
      '1775':'17.75rem',
      '18':'18rem',
      '1825':'18.25rem',
      '1850':'18.5rem',
      '1875':'18.75rem',
      '19':'19rem',
      '1925':'19.25rem',
      '1950':'19.5rem',
      '1975':'19.75rem',
      '20':'20rem',
      '2025':'20.25rem',
      '2050':'20.5rem',
      '2075':'20.75rem',
      '21':'21rem',
      '2125':'21.25rem',
      '2150':'21.5rem',
      '2175':'21.75rem',
      '22':'22rem',
      '2225':'22.25rem',
      '2250':'22.5rem',
      '2275':'22.75rem',
      '23':'23rem',
      '2325':'23.25rem',
      '2350':'23.5rem',
      '2375':'23.75rem',
      '24':'24rem',
      '2425':'24.25rem',
      '2450':'24.5rem',
      '2475':'24.75rem',
      '25':'25rem',
      '5/100':'5%',
      '10/100':'10%',
      '15/100':'15%',
      '20/100':'20%',
      '25/100':'25%',
      '30/100':'30%',
      '35/100':'35%',
      '40/100':'40%',
      '45/100':'45%',
      '50/100':'50%',
      '55/100':'55%',
      '60/100':'60%',
      '65/100':'65%',
      '70/100':'70%',
      '75/100':'75%',
      '80/100':'80%',
      '85/100':'85%',
      '90/100':'90%',
      '95/100':'95%',
      '100/100':'100%',

  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .max-h-{size}
  |
  */

  maxHeight: {
    'full': '100%',
    'screen': '100vh',
      '025':'0.25rem',
      '050':'0.5rem',
      '075':'0.75rem',
      '1':'1rem',
      '125':'1.25rem',
      '150':'1.5rem',
      '175':'1.75rem',
      '2':'2rem',
      '225':'2.25rem',
      '250':'2.5rem',
      '275':'2.75rem',
      '3':'3rem',
      '325':'3.25rem',
      '350':'3.5rem',
      '375':'3.75rem',
      '4':'4rem',
      '425':'4.25rem',
      '450':'4.5rem',
      '475':'4.75rem',
      '5':'5rem',
      '525':'5.25rem',
      '550':'5.5rem',
      '575':'5.75rem',
      '6':'6rem',
      '625':'6.25rem',
      '650':'6.5rem',
      '675':'6.75rem',
      '7':'7rem',
      '725':'7.25rem',
      '750':'7.5rem',
      '775':'7.75rem',
      '8':'8rem',
      '825':'8.25rem',
      '850':'8.5rem',
      '875':'8.75rem',
      '9':'9rem',
      '925':'9.25rem',
      '950':'9.5rem',
      '975':'9.75rem',
      '10':'10rem',
      '1025':'10.25rem',
      '1050':'10.5rem',
      '1075':'10.75rem',
      '11':'11rem',
      '1125':'11.25rem',
      '1150':'11.5rem',
      '1175':'11.75rem',
      '12':'12rem',
      '1225':'12.25rem',
      '1250':'12.5rem',
      '1275':'12.75rem',
      '13':'13rem',
      '1325':'13.25rem',
      '1350':'13.5rem',
      '1375':'13.75rem',
      '14':'14rem',
      '1425':'14.25rem',
      '1450':'14.5rem',
      '1475':'14.75rem',
      '15':'15rem',
      '1525':'15.25rem',
      '1550':'15.5rem',
      '1575':'15.75rem',
      '16':'16rem',
      '1625':'16.25rem',
      '1650':'16.5rem',
      '1675':'16.75rem',
      '17':'17rem',
      '1725':'17.25rem',
      '1750':'17.5rem',
      '1775':'17.75rem',
      '18':'18rem',
      '1825':'18.25rem',
      '1850':'18.5rem',
      '1875':'18.75rem',
      '19':'19rem',
      '1925':'19.25rem',
      '1950':'19.5rem',
      '1975':'19.75rem',
      '20':'20rem',
      '2025':'20.25rem',
      '2050':'20.5rem',
      '2075':'20.75rem',
      '21':'21rem',
      '2125':'21.25rem',
      '2150':'21.5rem',
      '2175':'21.75rem',
      '22':'22rem',
      '2225':'22.25rem',
      '2250':'22.5rem',
      '2275':'22.75rem',
      '23':'23rem',
      '2325':'23.25rem',
      '2350':'23.5rem',
      '2375':'23.75rem',
      '24':'24rem',
      '2425':'24.25rem',
      '2450':'24.5rem',
      '2475':'24.75rem',
      '25':'25rem',
      '5/100':'5%',
      '10/100':'10%',
      '15/100':'15%',
      '20/100':'20%',
      '25/100':'25%',
      '30/100':'30%',
      '35/100':'35%',
      '40/100':'40%',
      '45/100':'45%',
      '50/100':'50%',
      '55/100':'55%',
      '60/100':'60%',
      '65/100':'65%',
      '70/100':'70%',
      '75/100':'75%',
      '80/100':'80%',
      '85/100':'85%',
      '90/100':'90%',
      '95/100':'95%',
      '100/100':'100%',

  },


  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  |
  */

  padding: {
    'px': '1px',
      '0':'0',
      '025':'0.25rem',
      '050':'0.5rem',
      '075':'0.75rem',
      '1':'1rem',
      '125':'1.25rem',
      '150':'1.5rem',
      '175':'1.75rem',
      '2':'2rem',
      '225':'2.25rem',
      '250':'2.5rem',
      '275':'2.75rem',
      '3':'3rem',
      '325':'3.25rem',
      '350':'3.5rem',
      '375':'3.75rem',
      '4':'4rem',
      '425':'4.25rem',
      '450':'4.5rem',
      '475':'4.75rem',
      '5':'5rem',
      '525':'5.25rem',
      '550':'5.5rem',
      '575':'5.75rem',
      '6':'6rem',
      '625':'6.25rem',
      '650':'6.5rem',
      '675':'6.75rem',
      '7':'7rem',
      '725':'7.25rem',
      '750':'7.5rem',
      '775':'7.75rem',
      '8':'8rem',
      '825':'8.25rem',
      '850':'8.5rem',
      '875':'8.75rem',
      '9':'9rem',
      '925':'9.25rem',
      '950':'9.5rem',
      '975':'9.75rem',
      '10':'10rem',
      '1025':'10.25rem',
      '1050':'10.5rem',
      '1075':'10.75rem',
      '11':'11rem',
      '1125':'11.25rem',
      '1150':'11.5rem',
      '1175':'11.75rem',
      '12':'12rem',
      '1225':'12.25rem',
      '1250':'12.5rem',
      '1275':'12.75rem',
      '13':'13rem',
      '1325':'13.25rem',
      '1350':'13.5rem',
      '1375':'13.75rem',
      '14':'14rem',
      '1425':'14.25rem',
      '1450':'14.5rem',
      '1475':'14.75rem',
      '15':'15rem',
      '1525':'15.25rem',
      '1550':'15.5rem',
      '1575':'15.75rem',
      '16':'16rem',
      '1625':'16.25rem',
      '1650':'16.5rem',
      '1675':'16.75rem',
      '17':'17rem',
      '1725':'17.25rem',
      '1750':'17.5rem',
      '1775':'17.75rem',
      '18':'18rem',
      '1825':'18.25rem',
      '1850':'18.5rem',
      '1875':'18.75rem',
      '19':'19rem',
      '1925':'19.25rem',
      '1950':'19.5rem',
      '1975':'19.75rem',
      '20':'20rem',
      '2025':'20.25rem',
      '2050':'20.5rem',
      '2075':'20.75rem',
      '21':'21rem',
      '2125':'21.25rem',
      '2150':'21.5rem',
      '2175':'21.75rem',
      '22':'22rem',
      '2225':'22.25rem',
      '2250':'22.5rem',
      '2275':'22.75rem',
      '23':'23rem',
      '2325':'23.25rem',
      '2350':'23.5rem',
      '2375':'23.75rem',
      '24':'24rem',
      '2425':'24.25rem',
      '2450':'24.5rem',
      '2475':'24.75rem',
      '25':'25rem',
      '025e':'0.25em',
      '050e':'0.5em',
      '075e':'0.75em',
      '1e':'1em',
      '125e':'1.25em',
      '150e':'1.5em',
      '175e':'1.75em',
      '2e':'2em',
      '225e':'2.25em',
      '250e':'2.5em',
      '275e':'2.75em',
      '3e':'3em',
      '325e':'3.25em',
      '350e':'3.5em',
      '375e':'3.75em',
      '4e':'4em',
      '425e':'4.25em',
      '450e':'4.5em',
      '475e':'4.75em',
      '5e':'5em',
      '525e':'5.25em',
      '550e':'5.5em',
      '575e':'5.75em',
      '6e':'6em',
      '625e':'6.25em',
      '650e':'6.5em',
      '675e':'6.75em',
      '7e':'7em',
      '725e':'7.25em',
      '750e':'7.5em',
      '775e':'7.75em',
      '8e':'8em',
      '825e':'8.25em',
      '850e':'8.5em',
      '875e':'8.75em',
      '9e':'9em',
      '925e':'9.25em',
      '950e':'9.5em',
      '975e':'9.75em',
      '10e':'10em',
      '1025e':'10.25em',
      '1050e':'10.5em',
      '1075e':'10.75em',
      '11e':'11em',
      '1125e':'11.25em',
      '1150e':'11.5em',
      '1175e':'11.75em',
      '12e':'12em',
      '1225e':'12.25em',
      '1250e':'12.5em',
      '1275e':'12.75em',
      '13e':'13em',
      '1325e':'13.25em',
      '1350e':'13.5em',
      '1375e':'13.75em',
      '14e':'14em',
      '1425e':'14.25em',
      '1450e':'14.5em',
      '1475e':'14.75em',
      '15e':'15em',
      '1525e':'15.25em',
      '1550e':'15.5em',
      '1575e':'15.75em',
      '16e':'16em',
      '1625e':'16.25em',
      '1650e':'16.5em',
      '1675e':'16.75em',
      '17e':'17em',
      '1725e':'17.25em',
      '1750e':'17.5em',
      '1775e':'17.75em',
      '18e':'18em',
      '1825e':'18.25em',
      '1850e':'18.5em',
      '1875e':'18.75em',
      '19e':'19em',
      '1925e':'19.25em',
      '1950e':'19.5em',
      '1975e':'19.75em',
      '20e':'20em',
      '2025e':'20.25em',
      '2050e':'20.5em',
      '2075e':'20.75em',
      '21e':'21em',
      '2125e':'21.25em',
      '2150e':'21.5em',
      '2175e':'21.75em',
      '22e':'22em',
      '2225e':'22.25em',
      '2250e':'22.5em',
      '2275e':'22.75em',
      '23e':'23em',
      '2325e':'23.25em',
      '2350e':'23.5em',
      '2375e':'23.75em',
      '24e':'24em',
      '2425e':'24.25em',
      '2450e':'24.5em',
      '2475e':'24.75em',
      '25e':'25em',
  },


  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  |
  */

  margin: {
    'auto': 'auto',
    'px': '1px',
    '0': '0',
      '025':'0.25rem',
      '050':'0.5rem',
      '075':'0.75rem',
      '1':'1rem',
      '125':'1.25rem',
      '150':'1.5rem',
      '175':'1.75rem',
      '2':'2rem',
      '225':'2.25rem',
      '250':'2.5rem',
      '275':'2.75rem',
      '3':'3rem',
      '325':'3.25rem',
      '350':'3.5rem',
      '375':'3.75rem',
      '4':'4rem',
      '425':'4.25rem',
      '450':'4.5rem',
      '475':'4.75rem',
      '5':'5rem',
      '525':'5.25rem',
      '550':'5.5rem',
      '575':'5.75rem',
      '6':'6rem',
      '625':'6.25rem',
      '650':'6.5rem',
      '675':'6.75rem',
      '7':'7rem',
      '725':'7.25rem',
      '750':'7.5rem',
      '775':'7.75rem',
      '8':'8rem',
      '825':'8.25rem',
      '850':'8.5rem',
      '875':'8.75rem',
      '9':'9rem',
      '925':'9.25rem',
      '950':'9.5rem',
      '975':'9.75rem',
      '10':'10rem',
      '1025':'10.25rem',
      '1050':'10.5rem',
      '1075':'10.75rem',
      '11':'11rem',
      '1125':'11.25rem',
      '1150':'11.5rem',
      '1175':'11.75rem',
      '12':'12rem',
      '1225':'12.25rem',
      '1250':'12.5rem',
      '1275':'12.75rem',
      '13':'13rem',
      '1325':'13.25rem',
      '1350':'13.5rem',
      '1375':'13.75rem',
      '14':'14rem',
      '1425':'14.25rem',
      '1450':'14.5rem',
      '1475':'14.75rem',
      '15':'15rem',
      '1525':'15.25rem',
      '1550':'15.5rem',
      '1575':'15.75rem',
      '16':'16rem',
      '1625':'16.25rem',
      '1650':'16.5rem',
      '1675':'16.75rem',
      '17':'17rem',
      '1725':'17.25rem',
      '1750':'17.5rem',
      '1775':'17.75rem',
      '18':'18rem',
      '1825':'18.25rem',
      '1850':'18.5rem',
      '1875':'18.75rem',
      '19':'19rem',
      '1925':'19.25rem',
      '1950':'19.5rem',
      '1975':'19.75rem',
      '20':'20rem',
      '2025':'20.25rem',
      '2050':'20.5rem',
      '2075':'20.75rem',
      '21':'21rem',
      '2125':'21.25rem',
      '2150':'21.5rem',
      '2175':'21.75rem',
      '22':'22rem',
      '2225':'22.25rem',
      '2250':'22.5rem',
      '2275':'22.75rem',
      '23':'23rem',
      '2325':'23.25rem',
      '2350':'23.5rem',
      '2375':'23.75rem',
      '24':'24rem',
      '2425':'24.25rem',
      '2450':'24.5rem',
      '2475':'24.75rem',
      '25':'25rem',
      '025e':'0.25em',
      '050e':'0.5em',
      '075e':'0.75em',
      '1e':'1em',
      '125e':'1.25em',
      '150e':'1.5em',
      '175e':'1.75em',
      '2e':'2em',
      '225e':'2.25em',
      '250e':'2.5em',
      '275e':'2.75em',
      '3e':'3em',
      '325e':'3.25em',
      '350e':'3.5em',
      '375e':'3.75em',
      '4e':'4em',
      '425e':'4.25em',
      '450e':'4.5em',
      '475e':'4.75em',
      '5e':'5em',
      '525e':'5.25em',
      '550e':'5.5em',
      '575e':'5.75em',
      '6e':'6em',
      '625e':'6.25em',
      '650e':'6.5em',
      '675e':'6.75em',
      '7e':'7em',
      '725e':'7.25em',
      '750e':'7.5em',
      '775e':'7.75em',
      '8e':'8em',
      '825e':'8.25em',
      '850e':'8.5em',
      '875e':'8.75em',
      '9e':'9em',
      '925e':'9.25em',
      '950e':'9.5em',
      '975e':'9.75em',
      '10e':'10em',
      '1025e':'10.25em',
      '1050e':'10.5em',
      '1075e':'10.75em',
      '11e':'11em',
      '1125e':'11.25em',
      '1150e':'11.5em',
      '1175e':'11.75em',
      '12e':'12em',
      '1225e':'12.25em',
      '1250e':'12.5em',
      '1275e':'12.75em',
      '13e':'13em',
      '1325e':'13.25em',
      '1350e':'13.5em',
      '1375e':'13.75em',
      '14e':'14em',
      '1425e':'14.25em',
      '1450e':'14.5em',
      '1475e':'14.75em',
      '15e':'15em',
      '1525e':'15.25em',
      '1550e':'15.5em',
      '1575e':'15.75em',
      '16e':'16em',
      '1625e':'16.25em',
      '1650e':'16.5em',
      '1675e':'16.75em',
      '17e':'17em',
      '1725e':'17.25em',
      '1750e':'17.5em',
      '1775e':'17.75em',
      '18e':'18em',
      '1825e':'18.25em',
      '1850e':'18.5em',
      '1875e':'18.75em',
      '19e':'19em',
      '1925e':'19.25em',
      '1950e':'19.5em',
      '1975e':'19.75em',
      '20e':'20em',
      '2025e':'20.25em',
      '2050e':'20.5em',
      '2075e':'20.75em',
      '21e':'21em',
      '2125e':'21.25em',
      '2150e':'21.5em',
      '2175e':'21.75em',
      '22e':'22em',
      '2225e':'22.25em',
      '2250e':'22.5em',
      '2275e':'22.75em',
      '23e':'23em',
      '2325e':'23.25em',
      '2350e':'23.5em',
      '2375e':'23.75em',
      '24e':'24em',
      '2425e':'24.25em',
      '2450e':'24.5em',
      '2475e':'24.75em',
      '25e':'25em',
  },


  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your negative margin utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default we
  | provide matching values to the padding scale since these utilities
  | generally get used together. You can, of course, modify these
  | values as needed.
  |
  | Class name: .-m{side?}-{size}
  |
  */

  negativeMargin: {
    'px': '1px',
    '0': '0',
      '025':'0.25rem',
      '050':'0.5rem',
      '075':'0.75rem',
      '1':'1rem',
      '125':'1.25rem',
      '150':'1.5rem',
      '175':'1.75rem',
      '2':'2rem',
      '225':'2.25rem',
      '250':'2.5rem',
      '275':'2.75rem',
      '3':'3rem',
      '325':'3.25rem',
      '350':'3.5rem',
      '375':'3.75rem',
      '4':'4rem',
      '425':'4.25rem',
      '450':'4.5rem',
      '475':'4.75rem',
      '5':'5rem',
      '525':'5.25rem',
      '550':'5.5rem',
      '575':'5.75rem',
      '6':'6rem',
      '625':'6.25rem',
      '650':'6.5rem',
      '675':'6.75rem',
      '7':'7rem',
      '725':'7.25rem',
      '750':'7.5rem',
      '775':'7.75rem',
      '8':'8rem',
      '825':'8.25rem',
      '850':'8.5rem',
      '875':'8.75rem',
      '9':'9rem',
      '925':'9.25rem',
      '950':'9.5rem',
      '975':'9.75rem',
      '10':'10rem',
      '1025':'10.25rem',
      '1050':'10.5rem',
      '1075':'10.75rem',
      '11':'11rem',
      '1125':'11.25rem',
      '1150':'11.5rem',
      '1175':'11.75rem',
      '12':'12rem',
      '1225':'12.25rem',
      '1250':'12.5rem',
      '1275':'12.75rem',
      '13':'13rem',
      '1325':'13.25rem',
      '1350':'13.5rem',
      '1375':'13.75rem',
      '14':'14rem',
      '1425':'14.25rem',
      '1450':'14.5rem',
      '1475':'14.75rem',
      '15':'15rem',
      '1525':'15.25rem',
      '1550':'15.5rem',
      '1575':'15.75rem',
      '16':'16rem',
      '1625':'16.25rem',
      '1650':'16.5rem',
      '1675':'16.75rem',
      '17':'17rem',
      '1725':'17.25rem',
      '1750':'17.5rem',
      '1775':'17.75rem',
      '18':'18rem',
      '1825':'18.25rem',
      '1850':'18.5rem',
      '1875':'18.75rem',
      '19':'19rem',
      '1925':'19.25rem',
      '1950':'19.5rem',
      '1975':'19.75rem',
      '20':'20rem',
      '2025':'20.25rem',
      '2050':'20.5rem',
      '2075':'20.75rem',
      '21':'21rem',
      '2125':'21.25rem',
      '2150':'21.5rem',
      '2175':'21.75rem',
      '22':'22rem',
      '2225':'22.25rem',
      '2250':'22.5rem',
      '2275':'22.75rem',
      '23':'23rem',
      '2325':'23.25rem',
      '2350':'23.5rem',
      '2375':'23.75rem',
      '24':'24rem',
      '2425':'24.25rem',
      '2450':'24.5rem',
      '2475':'24.75rem',
      '25':'25rem',
      '025e':'0.25em',
      '050e':'0.5em',
      '075e':'0.75em',
      '1e':'1em',
      '125e':'1.25em',
      '150e':'1.5em',
      '175e':'1.75em',
      '2e':'2em',
      '225e':'2.25em',
      '250e':'2.5em',
      '275e':'2.75em',
      '3e':'3em',
      '325e':'3.25em',
      '350e':'3.5em',
      '375e':'3.75em',
      '4e':'4em',
      '425e':'4.25em',
      '450e':'4.5em',
      '475e':'4.75em',
      '5e':'5em',
      '525e':'5.25em',
      '550e':'5.5em',
      '575e':'5.75em',
      '6e':'6em',
      '625e':'6.25em',
      '650e':'6.5em',
      '675e':'6.75em',
      '7e':'7em',
      '725e':'7.25em',
      '750e':'7.5em',
      '775e':'7.75em',
      '8e':'8em',
      '825e':'8.25em',
      '850e':'8.5em',
      '875e':'8.75em',
      '9e':'9em',
      '925e':'9.25em',
      '950e':'9.5em',
      '975e':'9.75em',
      '10e':'10em',
      '1025e':'10.25em',
      '1050e':'10.5em',
      '1075e':'10.75em',
      '11e':'11em',
      '1125e':'11.25em',
      '1150e':'11.5em',
      '1175e':'11.75em',
      '12e':'12em',
      '1225e':'12.25em',
      '1250e':'12.5em',
      '1275e':'12.75em',
      '13e':'13em',
      '1325e':'13.25em',
      '1350e':'13.5em',
      '1375e':'13.75em',
      '14e':'14em',
      '1425e':'14.25em',
      '1450e':'14.5em',
      '1475e':'14.75em',
      '15e':'15em',
      '1525e':'15.25em',
      '1550e':'15.5em',
      '1575e':'15.75em',
      '16e':'16em',
      '1625e':'16.25em',
      '1650e':'16.5em',
      '1675e':'16.75em',
      '17e':'17em',
      '1725e':'17.25em',
      '1750e':'17.5em',
      '1775e':'17.75em',
      '18e':'18em',
      '1825e':'18.25em',
      '1850e':'18.5em',
      '1875e':'18.75em',
      '19e':'19em',
      '1925e':'19.25em',
      '1950e':'19.5em',
      '1975e':'19.75em',
      '20e':'20em',
      '2025e':'20.25em',
      '2050e':'20.5em',
      '2075e':'20.75em',
      '21e':'21em',
      '2125e':'21.25em',
      '2150e':'21.5em',
      '2175e':'21.75em',
      '22e':'22em',
      '2225e':'22.25em',
      '2250e':'22.5em',
      '2275e':'22.75em',
      '23e':'23em',
      '2325e':'23.25em',
      '2350e':'23.5em',
      '2375e':'23.75em',
      '24e':'24em',
      '2425e':'24.25em',
      '2450e':'24.5em',
      '2475e':'24.75em',
      '25e':'25em',
  },


  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  |
  */

  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'none': 'none',
  },


  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  |
  */

  zIndex: {
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
  },


  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  |
  */

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  |
  */

  svgFill: {
    'current': 'currentColor',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG stroke colors. By default we just provide
  | `stroke-current` which sets the stroke to the current text color. This lets
  | you specify a stroke color using existing text color utilities and helps
  | keep the generated CSS file size down.
  |
  | Class name: .stroke-{name}
  |
  */

  svgStroke: {
    'current': 'currentColor',
  },


  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColors: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive'],
    svgFill: [],
    svgStroke: [],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },


  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    require("tailwindcss/plugins/container")({
      // center: true,
      // padding: '1rem',
    }),
    require("glhd-tailwindcss-transitions")(),
    require("tailwindcss-cursor-extended")(["responsive"]),
    require("tailwindcss-blend-mode")(["responsive"])
  ],


  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },

}

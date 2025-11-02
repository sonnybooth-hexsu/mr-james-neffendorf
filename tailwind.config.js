/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        jamesLighter: '#F0F5FB',
        jamesLight: '#186DDC',
        jamesBlue: '#1C58A6',
        darkerJamesBlue: '#032859',
        jamesWhite: '#FCFCFD',
        lightOnDark: '#E6EFFF',
        blue: {
          50: '#F2F7FD',
          100: '#E4ECFA',
          200: '#C3D8F4',
          300: '#8EB8EB',
          400: '#5293DE',
          500: '#2C76CB',
          600: '#1C58A6',
          700: '#19498B',
          800: '#183F74',
          900: '#193661',
          950: '#112240',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  presets: [require('@relume_io/relume-tailwind')],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        jamesLight: '#186DDC',
        jamesBlue: '#1C58A6',
        darkerJamesBlue: '#032859',
        jamesWhite: '#FCFCFD',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  presets: [require('@relume_io/relume-tailwind')],
}

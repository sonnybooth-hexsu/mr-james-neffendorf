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
        jamesBlue: '#1B57A6',
        darkerJamesBlue: '#176EE1',
      },
    },
  },
  plugins: [],
  presets: [require('@relume_io/relume-tailwind')],
}

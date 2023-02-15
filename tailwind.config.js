const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://i.pinimg.com/originals/5e/9b/a0/5e9ba0d2b73720232d6c9939897bbfe1.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({ addComponents }) => {
      const components = {
        '#__next': {
          display: 'flex',
          minHeight: '100vh',
          'flex-direction': 'column',
        },
      };
      addComponents(components);
    }),
  ],
};

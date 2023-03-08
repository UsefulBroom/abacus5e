const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://i.pinimg.com/originals/5e/9b/a0/5e9ba0d2b73720232d6c9939897bbfe1.jpg')",
        rcHero: '',
        d20: 'url("https://i.pinimg.com/originals/0f/f2/90/0ff290c5e91a3025d77a3905e03818eb.png")',
        dmFeatured:
          "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapermaiden.com%2Fwallpaper%2F37721%2Fdownload%2F1920x1080%2Ffantasy-landscape-mountains-waterfall-river-fantasy.png&f=1&nofb=1&ipt=af92646ea2c3065d4ad8977192f0f37dbdae5880b6fb58720288db0f64a5f996&ipo=images')",
        paperScroll: "url('')",
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

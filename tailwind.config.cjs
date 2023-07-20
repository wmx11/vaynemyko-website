/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
        black: 'hsl(var(--black))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          accent: 'var(--accent)',
          neutral: 'var(--black)',
          '--p': 'var(--primary)',
          '--s': 'var(--secondary)',
          '--a': 'var(--accent)',
          '--n': 'var(--black)',
          '--rounded-btn': 'var(--border-radius)',
          '--rounded-box': 'var(--border-radius)',
          '--tab-radius': '0',
        },
      },
    ],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'port-bg-base': '#cb8c8f',
        'port-yellow-dark': '#ea9a38',
        'port-yellow-light': '#fee3ce',
        'port-yellow-ultra-light': '#fff6ee',
        'port-yellow-ultra-dark': '#6d3035',
        'port-pink-base': '#f67473'
      },
      fontSize: {
        clamp: "clamp(1rem, 3vw, 3rem)",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slab: ['Josefin Slab', 'serif'],
        snippet: ['Snippet', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        magra: ['Magra', 'sans-serif'],
        MavenPro: ['Maven Pro', 'sans-serif'],
        DarkerGro: ['Darker Grotesque', 'serif'],
      },
      colors: {
        'light-Purple': '#613F96',
        'light-AlphaPurple': '#603f96a8',
        'white': '#ffffff',
        'light-BG': '#F1F4F4',
        'dark-BG': '#0E0B0B',
        'dark-Green': '#A9CF6F',
        'dark-AlphaGreen': '#aed27918',
        'dark-HoverGreen': '#69922b',
      },
      screens: {
        'xs': '300px',
        'sm': '500px',
        'md': '768px',
      },
      darkMode: "class"
    },
  },
  plugins: [],
};

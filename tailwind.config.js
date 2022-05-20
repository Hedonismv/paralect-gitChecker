module.exports = {
  theme: {
    extend: {
        colors:{
            'header': '#0064EB',
            'secondary': '#808080'
        },
        height:{
            'header-size': '72px'
        }
    },
  },
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
};

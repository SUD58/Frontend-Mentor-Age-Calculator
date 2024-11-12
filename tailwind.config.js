/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
      },
      colors: {
        frontend: {
          purple: "hsl(259, 100 %, 65 %)",
          "light-red": "hsl(0, 100%, 67%)",
          "off-white": "hsl(0, 100%, 67%)",
          "light-grey": "hsl(0, 0%, 86%)",
          "smokey-grey": "hsl(0, 1%, 44%)",
          "off-black": "hsl(0, 0%, 8%)",
        },
      },
    },
  },
  plugins: [],
};

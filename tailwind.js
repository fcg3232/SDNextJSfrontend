/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    animation: {
      "spin-slow": "spin 3s linear infinite",
      bounce: "bounce 12s infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    },
    keyframes: {
      ping: {
        " 10%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
      bounce: {
        " 0%, 100%": {
          transform: "translateY(-6%)",
          // animation-timing-function: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        "50%": {
          transform: " translateY(0)",
          // animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        },
      },
    },
  },

  plugins: [],
};

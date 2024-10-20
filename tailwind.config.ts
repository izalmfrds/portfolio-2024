const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tomorrow: ['"Tomorrow"', "sans-serif"],
      },
      animation: {
        pulseAnimate: "pulseAnimate 4s ease-out infinite",
      },
      keyframes: {
        pulseAnimate: {
          "100%": {
            opacity: "0",
            transform: "scale(2)",
          },
        },
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};

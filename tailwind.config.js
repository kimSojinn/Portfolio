const px0_1600 = { ...Array.from(Array(1601)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  mode: "jit",
  theme: {
    screens: {
      mobile: { max: "768px" },
      tablet: { max: "1400px" },
      desktop: "2560px",
    },
    spacing: px0_1600,
    borderWidth: px0_200,
    borderRadius: px0_200,
    fontSize: px0_200,
    lineHeight: px0_200,
    minWidth: px0_1600,
    minHeight: px0_1600,
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      navy: "#374151",
      title: "#111827",
      desc: "#6B7280",
      "bg-gray": "#f9fafb",
    },
    extend: {},
  },
  plugins: [],
};

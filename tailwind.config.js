/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				light_gray: "#808dad",
				light_red: "#eb4a4a",
				black_blue: "#0e1630",
				dark_blue: "#171f38",
			},
			fontFamily: {
				primary: '"Quicksand", sans-serif',
			},
			screens: {
				sm: "576px",
				md: "768px",
				lg: "992px",
				xl: "1200px",
				"2xl": "1400px",
			},
		},
	},
	plugins: [],
};

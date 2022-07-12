module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["ui-serif, Georgia, Cambria,Times New Roman, Times, serif"],
			roboto: ["Roboto,Arial,sans-serif"],
		},

		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'midnight-900': '#121063', // ← use your desired hex code here
			},
		},
	},
	plugins: [],
}

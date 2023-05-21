/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
				title: ['Raleway', 'sans-serif']
			},
			screens: {
				smc: '30rem'
			},
			colors: {
				'brand-color': '#EA4646',
				'brand-color-light': '#EC5F5F'
			},
			boxShadow: {
				a: '1px -1px 4px rgba(234, 70, 70, 0.3), -1px 1px 4px rgba(234, 70, 70, 0.3)'
			}
		}
	},
	plugins: []
};

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
        smc: '30rem',
				sm: '40rem',
				md: '48rem',
				mdc: '56rem',
				lg: '64rem',
				xl: '80rem',
				'2xl': '90rem'
			},
			colors: {
				'brand-color': '#EA4646',
				'brand-color-light': '#EC5F5F',
				'green-tag-text': '#50D29B',
				'green-tag-border': '#9AD9AD',
				'green-tag-bg': '#EFFFF1',
				'red-tag-text': '#E96079',
				'red-tag-border': '#F5A6B9',
				'red-tag-bg': '#FFEFF3',
				'blue-tag-text': '#5EC7E9',
				'blue-tag-border': '#98D4E8',
				'blue-tag-bg': '#EFFCFF',
				'yellow-tag-text': '#DBB657',
				'yellow-tag-border': '#E0D180',
				'yellow-tag-bg': '#FFFBEF',
				'purple-tag-text': '#E562E8',
				'purple-tag-border': '#F4A6F5',
				'purple-tag-bg': '#FFEFFF',
				'link-blue': '#1686EE'
			},
			boxShadow: {
				a: '1px -1px 4px rgba(234, 70, 70, 0.3), -1px 1px 4px rgba(234, 70, 70, 0.3)',
				b: '2px -2px 10px rgba(0, 0, 0, 0.15), -2px 2px 10px rgba(0, 0, 0, 0.15)'
			},
			keyframes: {
				'pass-by': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(calc(100vw + 100%))' }
				},
				pop: {
					'0%': { transform: 'scale(0.8)' }
				}
			},
			animation: {
				'pass-by': 'pass-by 1.5s linear infinite',
				pop: 'pop 100ms linear 1'
			}
		}
	},
	plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				pink: {
					DEFAULT: '#eabdc4',
					100: '#f4dee2',
					200: '#f1d2d6',
					300: '#eec9cf',
					400: '#ebc1c8',
					500: '#eabdc4',
					600: '#d67d8b',
					700: '#c13d52',
					800: '#802936',
					900: '#40141b',
					950: '#200a0e'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};

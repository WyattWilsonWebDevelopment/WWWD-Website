/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			width: {
				'min-1': 'min(396px, 40svw)',
			},
			height: {
				'min-1': 'min(396px, 40svw)',
			},
			colors: {
				'brand-blue': '#0042f0'
			}

		},
	},
	plugins: [],
}



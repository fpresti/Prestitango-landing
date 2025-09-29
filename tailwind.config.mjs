/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
			},
			typography: {
				stone: {
					css: {
						'--tw-prose-body': '#44403c',
						'--tw-prose-headings': '#1c1917',
						'--tw-prose-lead': '#57534e',
						'--tw-prose-links': '#44403c',
						'--tw-prose-bold': '#1c1917',
						'--tw-prose-counters': '#78716c',
						'--tw-prose-bullets': '#d6d3d1',
						'--tw-prose-hr': '#e7e5e4',
						'--tw-prose-quotes': '#1c1917',
						'--tw-prose-quote-borders': '#d6d3d1',
						'--tw-prose-captions': '#78716c',
						'--tw-prose-code': '#1c1917',
						'--tw-prose-pre-code': '#e7e5e4',
						'--tw-prose-pre-bg': '#292524',
						'--tw-prose-th-borders': '#d6d3d1',
						'--tw-prose-td-borders': '#e7e5e4',
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
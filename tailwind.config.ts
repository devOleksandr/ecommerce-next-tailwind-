import type {Config} from "tailwindcss";

const plugin = require('tailwindcss/plugin');
import type {PluginAPI} from 'tailwindcss/types/config';

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'black': '#000',
				'black-main': '#333333',
				'gray': '#666666',
				'gray-light': '#666666',
				'gold': '#B88E2F'
			},
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			'h1': '3.25rem',
			'h2': '2.5rem',
			'h3': '2rem',
			'h4': '1.75rem',
			'h5': '1.5rem',
			'h6': '1.25rem',
		},
		screens: {
			sm: '640px',
			md: '991px',
			lg: '1280px',
			xl: '1440px'
		},
	},
	plugins: [plugin(function ({addBase, theme}: PluginAPI) {
		addBase({
			'h1': {fontSize: theme('fontSize.h1'), fontWeight: '900', lineHeight: '1.2', color: theme('extend.colors.black-main')},
			'h2': {fontSize: theme('fontSize.h2'), fontWeight: '900', lineHeight: '1.2', color: theme('extend.colors.black-main')},
			'h3': {fontSize: theme('fontSize.h3'), fontWeight: '900', lineHeight: '1.2', color: theme('extend.colors.black-main')},
			'h4': {fontSize: theme('fontSize.h4'), fontWeight: '900', lineHeight: '1.2', color: theme('extend.colors.black-main')},
			'h5': {fontSize: theme('fontSize.h5'), fontWeight: '900', lineHeight: '1.2', color: theme('extend.colors.black-main')},
			'h6': {fontSize: theme('fontSize.h6'), fontWeight: '900', lineHeight: '1.2', color: theme('extend.colors.black-main')},
		})
	})],
} satisfies Config;
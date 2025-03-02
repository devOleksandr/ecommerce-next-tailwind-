'use client';
import { createTheme } from '@mui/material/styles';
import {Poppins, Roboto} from 'next/font/google';

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ['100', '300', '400', '500', '700', '900']
})

const theme = createTheme({
	colorSchemes: { light: true, dark: true },
	cssVariables: {
		colorSchemeSelector: 'class',
	},
	typography: {
		fontFamily: poppins.style.fontFamily,
	},
	components: {
		MuiAlert: {
			styleOverrides: {
				root: {
					variants: [
						{
							props: { severity: 'info' },
							style: {
								backgroundColor: '#60a5fa',
							},
						},
					],
				},
			},
		},
	},
});

export default theme;
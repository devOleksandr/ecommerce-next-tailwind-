import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/providers/ReduxProvider";


const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body
			className={`${poppins.variable} font-sans`}
		>
		<ReduxProvider>{children}</ReduxProvider>
		</body>
		</html>
	);
}

"use client"
import {ReactNode} from "react";
import {Header} from "../Header";
import {Footer} from "@/modules/Layout/Footer";
import {RootState, useAppSelector} from "@/store/store";
import {Cart} from "@/modules/Cart";

export const Layout = ({children}: { children: ReactNode }) => {
	const displayCartFlag = useAppSelector((state: RootState) => state.cart.displayCartFlag)

	return (
		<>
			<Header/>
			{
				displayCartFlag && (
					<Cart/>
				)
			}
			<main>
				{children}
			</main>
			<Footer/>
		</>
	)
}
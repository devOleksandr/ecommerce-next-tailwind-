"use client"
import LogoIcon from "@/public/icons/logo.svg";
import Link from "next/link";
import React, {useState} from "react";


const linksData: Array<{ link: string, label: string }> = [
	{
		label: "Home",
		link: "/"
	},
	{
		label: "Shop",
		link: "/shop"
	},
	{
		label: "About",
		link: "/about"
	},
	{
		label: "Contact",
		link: "/contact"
	},
]

const helpData: Array<{ link: string, label: string }> = [
	{
		label: "Payment Options",
		link: "/"
	},
	{
		label: "Returns",
		link: "/shop"
	},
	{
		label: "Privacy Policies",
		link: "/about"
	}
]

export const Footer = () => {
	const [email, setEmail] = useState("")

	const onSendHandler = (e: React.FormEvent) => {
		e.preventDefault();
	}

	// TODO: check h t disable outline style f input
	return (
		<footer className="w-full bg-white border-t border-gray-light">
			<div className="container pt-[48px] ">
				<div className="w-full flex items-start pb-[48px]">
					<div className="mr-[72px] max-w-[285px]">
						<LogoIcon className="max-w-[185px] w-full object-contain mb-4"/>
						<p className="text-gray-light text-xs"> 400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
					</div>
					<div className="max-w-[185px] mr-[72px]">
						<p className="text-gray-light mb-6">Links</p>
						<ul>
							{
								linksData.map((item, index) => {
									return (
										<li key={index} className="group mb-[36px] last:mb-0">
											<Link
												href={item.link}
												className="group-hover:text-gold-hover text-black font-bold"
											>{item.label}</Link>
										</li>
									)
								})
							}
						</ul>
					</div>
					<div className="max-w-[185px] mr-[72px]">
						<p className="text-gray-light mb-6">Help</p>
						<ul>
							{
								helpData.map((item, index) => {
									return (
										<li key={index} className="group mb-[36px] last:mb-0">
											<Link
												href={item.link}
												className="group-hover:text-gold-hover text-black font-bold"
											>{item.label}</Link>
										</li>
									)
								})
							}
						</ul>
					</div>
					<form className="flex" onSubmit={onSendHandler}>
						<div className="max-w-[200px] mr-3 ">
							<input
								type="email"
								className="w-full newsletter-input"
								value={email}
								placeholder="Enter Your Email Address"
								onChange={(e) => setEmail(e.target.value)}/>
						</div>
						<button className="newsletter-button">SUBSCRIBE</button>
					</form>
				</div>
				<div className="w-full py-[36px] border-t border-gray-light">
					<p>2023 furino. All rights reverved</p>
				</div>
			</div>
		</footer>
	)
}

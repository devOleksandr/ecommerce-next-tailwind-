import logo from "@/public/icons/logo.svg";
import Link from "next/link";
import Image from "next/image";


const links:Array<{link: string, label: string}> = [
	{
		label: "Home",
		link: "/"
	},
	{
		label: "Shop",
		link: "/"
	},
	{
		label: "About",
		link: "/"
	},
	{
		label: "Contact",
		link: "/"
	},
]

export const Header = () => {
	return(
		<header className="w-full">
			<div className="container flex justify-between align-middle">
				<Link href="/" className="max-w-[185px] w-full">
					<Image src={logo} alt={'logo'}/>
				</Link>
				<ul className="px-1 flex align-middle">
					{
						links.map((item, index) => {
							return (
								<li className="pr-[72px] last:pr-0" key={index}>
									<Link href={item.link} className="text-base">{item.label}</Link>
								</li>
							)
						})
					}
				</ul>

			</div>

		</header>
	)
}
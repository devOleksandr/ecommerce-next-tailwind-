"use client"
import Image from "next/image";
import guaranteeIc1 from "@/public/guarantee/trophy1.svg"
import guaranteeIc2 from "@/public/guarantee/guarantee.svg"
import guaranteeIc3 from "@/public/guarantee/shipping.svg"
import guaranteeIc4 from "@/public/guarantee/customer-support.svg"

const tempData = [
	{
		icon: guaranteeIc1,
		title: "High Quality",
		description: "crafted from top materials"
	},
	{
		icon: guaranteeIc2,
		title: "Warranty Protection",
		description: "Over 2 years"
	},
	{
		icon: guaranteeIc3,
		title: "Free Shipping",
		description: "Order over 150 $"
	},
	{
		icon: guaranteeIc4,
		title: "24 / 7 Support",
		description: "Dedicated support"
	},
]

export const GuaranteeInfo = () => {

	return (
		<section className="py-[100px] bg-milk">
			<div className="container">
				<div className="grid grid-cols-4 gap-[60px]">
					{
						tempData.map((item, i) => {
							return (
								<div key={i} className="flex">
									<Image src={item.icon} alt={''} width={60} height={60} className="w-[60px] h-[60px] mr-3"/>
									<div>
										<h6 className="mb-1">{item.title}</h6>
										<p className="text-gray-light-2">{item.description}</p>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}
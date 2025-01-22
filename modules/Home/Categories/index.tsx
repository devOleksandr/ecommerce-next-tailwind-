import image1 from "@/public/home/category/c1.png"
import image2 from "@/public/home/category/c2.png"
import image3 from "@/public/home/category/c3.png"
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface ICategoryDataItem {
	image: StaticImageData,
	link: string,
	name: string
}

const tempData: Array<ICategoryDataItem> = [
	{
		image: image1,
		link: '/',
		name: 'Dining'
	},
	{
		image: image2,
		link: '/',
		name: 'Living'
	},
	{
		image: image3,
		link: '/',
		name: 'Bedroom'
	},
]

export const Categories = () => {

	return (
		<section className="pt-[60px] pb-8">
			<div className="container">
				<h2 className="text-center mb-1">Browse The Range</h2>
				<p className="text-gray-light mb-[62px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.</p>
				<div className="grid grid-cols-3 gap-4">
					{
						tempData.map((item, index) => {
							return (
								<Link href={item.link} key={index} className="group">
									<Image className="rounded-[15px] mb-5 transition-all group-hover:blur-[4px]" src={item.image}
									       alt={item.name}/>
									<h5 className="text-center transition-all group-hover:text-gold-hover">{item.name}</h5>
								</Link>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}

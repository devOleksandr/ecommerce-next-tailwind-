import Image from "next/image";
import bannerPic from "@/public/home/banner/bg.png"
import Link from "next/link";

export const Banner = () => {

	return(
		<section className="relative min-h-[716px]">
			<div className="container flex justify-end pt-[158px] pb-[116px]">
				<Image src={bannerPic} alt={'banner pic'} quality={100} className="absolute w-full left-0 top-0 -z-10 object-cover h-[100%]" />
				<div className="max-w-[642px] pt-[62px] px-[42px] pb-[36px] rounded-xl bg-gold-light z-10">
					<span className="mb-1 text-black-main font-semibold">New Arrival</span>
					<h1 className="text-gold mb-4">Discover Our New Collection</h1>
					<p className="text-lg mb-[46px] text-black-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Ut elit tellus, luctus nec ullamcorper mattis.</p>
					<Link href={'/'} className="button">BUY Now</Link>
				</div>
			</div>
		</section>
	)
}
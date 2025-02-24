import starGold from "@/public/icons/svg/star-gold.svg"
import Image from "next/image";


interface IStatisticItem {
	value: number,
	percent: number
}

export const Statistic = ({data}: {data: Array<IStatisticItem>}) => {

	return (
		<div>
			{
				data.map((item, index) => {
					return (
						<div className="w-full flex items-center mb-3" key={index}>
							<div className="flex mr-4">
								<span className="font-semibold text-sm text-black-main pr-1">{item.value}</span>
								<Image src={starGold} width={18} height={18} alt={'star icon'} className="w-[18px] h-[18px] "/>
							</div>
							<div className={`flex-1 p-2 bg-milk border-2 border-gold rounded-[12px] relative`}>
								<span className={`absolute  w-full rounded-[12px] bg-gold h-full left-0 top-0`} style={{maxWidth: `${item.percent}%`}}></span>
							</div>
							<div className="ml-3 min-w-[40px]">
								<p className="text-gray-light-2 text-sm">{item.percent}%</p>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}
"use client"
import Image from "next/image";
import avatarSrc from "@/public/reviewTemp/people.svg"
import {Statistic} from "@/modules/SingleProduct/Statistic";
import {useState} from "react";
import {FeedbackForm} from "@/modules/SingleProduct/FeedbackForm";

const tempData = [
	{
		avatar: avatarSrc,
		name: 'Emily Selman',
		rating: 4,
		comment: 'This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.'
	},
	{
		avatar: avatarSrc,
		name: 'Emily Selman',
		rating: 4,
		comment: 'This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.'
	},
]

const tempPercentData = [
	{value: 5, percent: 40},
	{value: 4, percent: 10},
	{value: 3, percent: 30},
	{value: 2, percent: 20},
	{value: 1, percent: 0},
]

export const Review = () => {

	return (
		<div className="grid grid-cols-3 gap-[100px]">
			<div>
				<h3 className="mb-4">Customer Reviews</h3>
				<Statistic data={tempPercentData}/>
				<h6 className="mt-8 mb-2">Share your thoughts</h6>
				<p className="mb-2 text-sm text-gray-light-2">If you’ve used this product, share your thoughts with other
					customers</p>
				<FeedbackForm/>
			</div>

			<div className="col-span-2">
				{
					tempData.map((item, index) => {
						return (
							<div className="py-8 first:pt-0 border-b-[1px] last:border-b-0 border-gray-light" key={index}>
								<div className="mb-4 flex">
									<Image src={avatarSrc} alt={'avatar src'} width={48} height={48}
									       className="w-[48px] h-[48px] rounded-full"/>
									<div className="ml-2">
										<h6 className="mb-2">{item.name}</h6>
										<div className="flex items-center">
											{
												Array.from({length: 5}, (_, index: number) => (
													<svg
														key={index}
														className="w-5 h-5"
														aria-hidden="true"
														focusable="false"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 576 512">
														<path
															className={`${item.rating >= index + 1 ? 'fill-gold' : 'fill-gray-light'}`}
															d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
													</svg>
												))
											}
										</div>
									</div>
								</div>
								<p className="text-gray text-sm">{item.comment}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}
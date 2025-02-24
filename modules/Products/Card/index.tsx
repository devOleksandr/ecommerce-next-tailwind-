"use client"
import Image from "next/image";
import {Rating} from "@/components/UI/Rating";
import tempImg from "@/public/icons/temp/temp-product.png"
import Link from "next/link";
import BasketIcon from "@/public/icons/svg/card-basket.svg?component"

export const Card = () => {

  const addToBasketHandler = () => {

  }

  return (
    <div className="card">
      <Link href={'/shop/1'} className="w-full group">
        <Image src={tempImg} alt={'name'} className="w-full bg-cover transition-all group-hover:blur-[2px]"/>
        <h6 className="my-3 font-medium group-hover:text-gold-hover transition-all">Name</h6>
      </Link>
      <Rating value={4} action={() => console.log("handler")}/>
      <div className="flex items-center justify-between my-2">
        <p className="text-gold text-h6 font-medium">7 004<span>₴</span></p>
        <button onClick={() => addToBasketHandler()} className="hover:bg-gold-light transition-all">
          <BasketIcon className="w-8 h-8 flex"/>
        </button>
      </div>
    </div>
  )
}
"use client"
import Image from "next/image";
import {Rating} from "@/components/UI/Rating";
import tempImg from "@/public/icons/temp/temp-product.png"
import Link from "next/link";
import BasketIcon from "@/public/icons/svg/card-basket.svg"

export const Card = () => {

  const addToBasketHandler = () => {

  }

  return (
    <div className="card">
      <Link href={'/'}>
        <Image src={tempImg} alt={'name'}/>
        <h5 className="">Name</h5>
      </Link>
      <Rating value={4} action={() => console.log("handler")}/>
      <div className="flex items-center justify-between">
        <p>7 004<span>₴</span></p>
        <button onClick={() => addToBasketHandler()}>
          <BasketIcon/>
        </button>
      </div>
    </div>
  )
}
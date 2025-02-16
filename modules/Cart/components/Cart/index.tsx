"use client"
import {useRef} from "react";
import cardImg from "@/public/cart/shopping-cart-page-04-product-03.jpg"
import CloseIcon from "@/public/icons/svg/icons8-close.svg?component"
import Image from "next/image";
import {useAppDispatch, useAppSelector} from "@/store/store";
import {cartToggle} from "@/modules/Cart/redux/cartSlice";
import {QuantityInput} from "@/components/UI/QuantityInput";
import useClickOutside from "@/hooks/useClickOutside";

const tempData = [
  {
    image: cardImg,
    name: 'Zip Tote Basket',
    quantity: 0,
    price: 0,
  },
  {
    image: cardImg,
    name: 'Zip Tote Basket',
    quantity: 0,
    price: 0,
  },
  {
    image: cardImg,
    name: 'Zip Tote Basket',
    quantity: 0,
    price: 0,
  },
]

export const Cart = () => {
  const cardDisplayFlag = useAppSelector(state => state.cart.displayCartFlag)
  const ref =  useRef(null)

  const dispatch = useAppDispatch()
  useClickOutside(ref, () => dispatch(cartToggle(false)))



  return (
    <div className="fixed z-20 bg-[#02135266] left-0 top-0 w-full h-screen flex justify-end items-start">
      <div className="bg-white max-w-[400px] w-full" ref={ref}>
        <div className="p-6 mb-8 flex items-center justify-between shadow min-h-[81px]">
          <h5>Shopping cart</h5>
          <button
            className="w-[20px] h-[20px] cursor-pointer"
            role="button"
            onClick={() => dispatch(cartToggle(!cardDisplayFlag))}
          >
            <CloseIcon/>
          </button>
        </div>
        <ul className="mb-[30px] p-6 ">
          {
            tempData.map((item, index) => {
              return (
                <li key={index}
                    className="flex justify-between mb-4 last:mb-0 border-b-2 border-gray-light last:border-0">
                  <Image src={item.image} alt={item.name}
                         className="w-[100px] h-[100px] object-contain rounded-md mr-4 border-2 rounder-[13px]"/>
                  <div className="w-full flex-col">
                    <h6 className="mb-4">{item.name}</h6>
                    <div className="flex justify-start w-full items-center">
                      <QuantityInput quantity={0} quantityHandler={() => console.log('f')}/>
                      <p className="text-h6 text-gold font-medium ml-2">2200$</p>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className="mb-4 px-6 ">
          <div className="w-full flex justify-between">
            <p className="text-h6">Subtotal</p>
            <p className="text-h5 font-medium">$262.00</p>
          </div>
          <p className="text-gray-light text-sm">Shipping and taxes calculated at checkout.</p>
        </div>
        <div className="p-6 w-full flex items-end">
          <button className="button-small ml-auto" type="button">Checkout</button>

        </div>
      </div>
    </div>
  )
}
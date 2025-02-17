"use client"
interface IQuantityInput  {
  quantity: number;
  quantityHandler: (quantity: number) => void;
}

export const QuantityInput = ({quantity, quantityHandler}: IQuantityInput) => {

  return(
    <div className="flex items-center">
      <button className="w-[16px] h-[16px] m-3 cursor-pointer ">
        <div className="w-full h-[3px] bg-black-main"></div>
      </button>
      <input type="number" value={quantity} onChange={(e) => quantityHandler(Number(e.target.value))} min={1} className="px-2 py-1 border-2 border-gray-light w-[40px] text-center"/>
      <button className="w-[16px] h-[16px] m-3 cursor-pointer relative flex items-center justify-center">
        <div className="w-full h-[3px] bg-black-main"></div>
        <div className="w-[3px] h-full bg-black-main absolute"></div>
      </button>
    </div>
  )
}

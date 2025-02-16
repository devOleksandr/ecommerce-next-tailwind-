"use client"
interface IQuantityInput  {
  quantity: number;
  quantityHandler: (quantity: number) => void;
}

export const QuantityInput = ({quantity, quantityHandler}: IQuantityInput) => {

  return(
    <div className="flex items-center">
      <button className="w-[20px] h-[20px] m-3 cursor-pointer ">
        <div className="w-full h-[3px] bg-black-main"></div>
      </button>
      <input type="number" value={quantity} onChange={(e) => quantityHandler(Number(e.target.value))} min={1} className="p-2 border-2 border-gray-light rounded-[12px] w-[60px] text-center"/>
      <button className="w-[20px] h-[20px] m-3 cursor-pointer relative flex items-center justify-center">
        <div className="w-full h-[3px] bg-black-main"></div>
        <div className="w-[3px] h-full bg-black-main absolute"></div>
      </button>
    </div>
  )
}

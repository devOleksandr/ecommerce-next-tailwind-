"use client"
import {useState} from "react";

const tempData = [
  {
    name: 'Category',
    property : ['All New Arrivals', 'Tees', 'Crewnecks', 'Sweatshirts', 'Shorts']
  },
  {
    name: 'Color',
    property : ['White', 'Beige', 'Blue', 'Brown', 'Green']
  },
  {
    name: 'Sizes',
    property : ['XS', 'S', 'M', 'L', 'XL', '2XL']
  },
]

export const Filter = () => {
  const [state, setState] = useState(false)
  return(
    <div>
    </div>
  )
}



import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem, ICartState} from "@/modules/Cart/redux/cartTypes";


const initialState: ICartState = {
	items: [],
	totalPrice: 0
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartItem>) => {
			const {id} = action.payload
		}
	}
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
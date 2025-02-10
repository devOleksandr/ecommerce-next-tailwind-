import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem, ICartState} from "@/modules/Cart/redux/cartTypes";


const initialState: ICartState = {
	items: [],
	totalPrice: 0,
	displayCartFlag: false
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		cartToggle: (state, action: PayloadAction<boolean>) => {
			state.displayCartFlag = action.payload
			console.log(action.payload, 'payload');

		},
		addToCart: (state, action: PayloadAction<ICartItem>) => {
			const {id} = action.payload
		}
	}
})

export const {addToCart, cartToggle} = cartSlice.actions
export default cartSlice.reducer
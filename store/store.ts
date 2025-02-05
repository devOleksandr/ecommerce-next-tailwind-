import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import cartReducer from "@/modules/Cart/redux/cartSlice"

export const store = configureStore({
	reducer: {
		cart: cartReducer
	}
});

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch  = typeof store.dispatch;

export const useAppDispatch  = () => useDispatch<AppDispatch>();
export const useAppSelector :<T>(selector: (state: RootState) => T) => T = useSelector
export interface ICartItem {
	id: string,
	name: string,
	price: number,
	count: number,
	image: string
}

export interface ICartState{
	items: ICartItem[];
	totalPrice: number,
	displayCartFlag: boolean
}
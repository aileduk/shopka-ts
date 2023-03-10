import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IProduct } from "../../types"

interface ICartState {
	productsInCart: IProduct[]
}

const initialState: ICartState = {
	productsInCart: [],
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setProductsInCart(state, actions: PayloadAction<IProduct>) {
			if (!state.productsInCart.find(product => product.id === actions.payload.id)) {
				state.productsInCart.push(actions.payload)
			}
		},
		incrementAmount(state, actions: PayloadAction<number>) {
			state.productsInCart = state.productsInCart.map(product => {
				if (actions.payload === product.id) {
					return { ...product, amount: (product.amount += 1) }
				}
				return product
			})
		},
		decrementAmount(state, actions: PayloadAction<number>) {
			state.productsInCart = state.productsInCart.map(product => {
				if (actions.payload === product.id) {
					return { ...product, amount: product.amount > 1 ? (product.amount -= 1) : (product.amount = 1) }
				}
				return product
			})
		},
		setRemove(state, actions: PayloadAction<number>) {
			state.productsInCart = state.productsInCart.filter(product => product.id !== actions.payload)
		},
	},
})

export default cartSlice.reducer
export const { setProductsInCart, incrementAmount, decrementAmount, setRemove } = cartSlice.actions

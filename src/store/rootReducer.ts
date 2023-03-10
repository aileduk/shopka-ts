import { combineReducers } from "@reduxjs/toolkit"

import cartSlice from "./cart/cart.slice"
import catalogSlice from "./catalog/catalog.slice"

export const rootReducer = combineReducers({
	cart: cartSlice,
	catalog: catalogSlice,
})

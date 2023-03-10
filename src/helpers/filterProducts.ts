import { getSortedProducts } from "./sortProducts"

import { IProduct } from "../types"

export const getFilteredProducts = (products: IProduct[], filter: string | null, sort: string) => {
	const sorted = getSortedProducts(products, sort)

	const filtered = sorted.filter(product => !filter || product.category === filter)

	return filtered
}

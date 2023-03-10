import { IProduct } from "../types"

export const getSortedProducts = (products: IProduct[], sort: string) => {
	const sorted =
		sort === "default"
			? products
			: sort === "asc"
			? [...products].sort((a, b) => a.price - b.price)
			: sort === "desc"
			? [...products].sort((a, b) => b.price - a.price)
			: products
	return sorted
}

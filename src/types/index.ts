export interface IProduct {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: TRating
	amount: number
}

type TRating = {
	rate: number
	count: number
}

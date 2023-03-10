import React, { FC, SyntheticEvent } from "react"
import ReactStars from "react-rating-stars-component"

import { useAppDispatch } from "../../hooks/reduxHooks"

import { setProductsInCart } from "../../store/cart/cart.slice"

import { IProduct } from "../../types"

import styles from "./RatingAndAdding.module.scss"

interface IRatingAndAddingProps {
	product: IProduct
	btnStatus: boolean
}

const RatingAndAdding: FC<IRatingAndAddingProps> = ({ product, btnStatus }) => {
	const dispatch = useAppDispatch()

	const productToCart = (e: SyntheticEvent<HTMLButtonElement>, product: IProduct) => {
		e.preventDefault()
		e.stopPropagation()
		dispatch(setProductsInCart(product))
	}

	return (
		<div className={styles.container}>
			<div className={styles.rating}>
				<ReactStars size={20} value={product.rating.rate} isHalf={true} edit={false} />
				<span>{product.rating.rate}</span>
			</div>
			<button
				className={btnStatus ? `${styles.button} ${styles.added}` : styles.button}
				onClick={e => productToCart(e, { ...product, amount: 1 })}>
				{btnStatus ? "Added" : "Add to cart"}
			</button>
		</div>
	)
}

export default RatingAndAdding

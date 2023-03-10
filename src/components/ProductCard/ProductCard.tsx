import React, { FC } from "react"
import { Link } from "react-router-dom"

import { useAppSelector } from "../../hooks/reduxHooks"

import RatingAndAdding from "../RatingAndAdding/RatingAndAdding"

import { startScrolling } from "../../helpers/scrollAtTheTop"

import { IProduct } from "../../types"

import styles from "./ProductCard.module.scss"

interface IProductCard {
	product: IProduct
}

const ProductCard: FC<IProductCard> = ({ product }) => {
	const { image, category, title, price, description, id } = product

	const { productsInCart } = useAppSelector(state => state.cart)

	const btnStatus = productsInCart.some(product => product.id === id)

	return (
		<Link to={`/product/${id}`} className={styles.card} onClick={startScrolling}>
			<div className={styles.image}>
				<img src={image} alt={category} />
			</div>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.price}>${price}</div>
			<div className={styles.description}>
				<p>{description}</p>
			</div>
			<RatingAndAdding btnStatus={btnStatus} product={product} />
		</Link>
	)
}

export default ProductCard

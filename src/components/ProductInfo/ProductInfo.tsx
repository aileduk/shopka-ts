import React, { FC, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { useAppSelector } from "../../hooks/reduxHooks"

import RatingAndAdding from "../RatingAndAdding/RatingAndAdding"
import Preloader from "../Preloader/Preloader"

import { fetchProductInfo } from "../../api"

import { IProduct } from "../../types"

import styles from "./ProductInfo.module.scss"

const ProductInfo: FC = () => {
	const { productId } = useParams()

	const { productsInCart } = useAppSelector(state => state.cart)

	const [product, setProduct] = useState<IProduct | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		fetchProductInfo(productId).then(res => {
			setLoading(true)
			setProduct(res)
			setLoading(false)
		})
	}, [productId])

	const { image, description, title, price, category, id } = product ?? {}

	const btnStatus = productsInCart.some(product => product.id === id)

	return (
		<>
			{loading ? (
				<Preloader />
			) : (
				product && (
					<div className={styles.container}>
						<div className={styles.image}>
							<img src={image} alt={category} />
						</div>
						<div className={styles.info}>
							<h2 className={styles.title}>{title}</h2>
							<div className={styles.price}>${price}</div>
							<RatingAndAdding btnStatus={btnStatus} product={product} />
							<div className={styles.description}>{description}</div>
							<Link to={"/"} className={styles.back}>
								Back to shoping list
							</Link>
						</div>
					</div>
				)
			)}
		</>
	)
}

export default ProductInfo

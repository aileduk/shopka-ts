import React, { FC, useMemo } from "react"

import { useAppSelector } from "../../hooks/reduxHooks"

import ProductCard from "../ProductCard/ProductCard"

import { getFilteredProducts } from "../../helpers/filterProducts"

import styles from "./Products.module.scss"

const Products: FC = () => {
	const { products, filter, sort } = useAppSelector(state => state.catalog)

	const productsToRender = useMemo(() => {
		return getFilteredProducts(products, filter, sort)
	}, [products, filter, sort])

	return (
		<main className={styles.container}>
			{productsToRender.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</main>
	)
}

export default Products

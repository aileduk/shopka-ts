import React, { FC } from "react"

import Categories from "../Categories/Categories"
import Products from "../Products/Products"
import ScrollButton from "../ScrollButton/ScrollButton"

import styles from "./Catalog.module.scss"

const Catalog: FC = () => {
	return (
		<div className={styles.container}>
			<Categories />
			<Products />
			<ScrollButton />
		</div>
	)
}

export default Catalog

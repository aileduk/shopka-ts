import React from "react"
import { Link, useLocation } from "react-router-dom"

import { useAppSelector } from "../../hooks/reduxHooks"

import { startScrolling } from "../../helpers/scrollAtTheTop"

import styles from "./CartButton.module.scss"

const CartButton = () => {
	const location = useLocation()

	const { productsInCart } = useAppSelector(state => state.cart)

	const text = location.pathname === "/cart" ? "Back to products" : "My cart"
	const path = location.pathname !== "/cart" ? "/cart" : "/"

	return (
		<Link className={styles.cart} to={path} onClick={startScrolling}>
			{location.pathname !== "/cart" ? <span className={styles.amount}>{productsInCart.length}</span> : null}
			<span>{text}</span>
		</Link>
	)
}

export default CartButton

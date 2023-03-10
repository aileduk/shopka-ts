import React, { FC, useState } from "react"

import { useAppSelector } from "../../hooks/reduxHooks"

import CartItem from "../CartItem/CartItem"
import CartIsEmpty from "../CartIsEmpty/CartIsEmpty"
import Modal from "../Modal/Modal"
import ScrollButton from "../ScrollButton/ScrollButton"

import styles from "./Cart.module.scss"

const Cart: FC = () => {
	const { productsInCart } = useAppSelector(state => state.cart)

	const [modalActive, setModalActive] = useState<boolean>(false)

	const toggleModal = () => {
		setModalActive(prev => !prev)
		document.body.classList.toggle("open")
	}

	const getTotalPrice = () => {
		let totalPrice = 0
		productsInCart.forEach(product => {
			return (totalPrice += product.amount * product.price)
		})
		return totalPrice
	}

	return (
		<div className={styles.container}>
			<div className={styles.list}>
				{productsInCart.length ? (
					productsInCart.map(product => <CartItem product={product} key={product.id} />)
				) : (
					<CartIsEmpty />
				)}
			</div>
			<aside className={styles.total}>
				<div className={styles.price}>Total: ${getTotalPrice().toFixed(2)}</div>
				<button className={styles.checkout} disabled={!productsInCart.length} onClick={toggleModal}>
					Checkout
				</button>
			</aside>
			<ScrollButton />
			<Modal active={modalActive} toggleModal={toggleModal} />
		</div>
	)
}

export default Cart

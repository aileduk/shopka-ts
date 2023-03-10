import React, { FC } from "react"
import { useDispatch } from "react-redux"

import { decrementAmount, incrementAmount, setRemove } from "../../store/cart/cart.slice"

import styles from "./CartItem.module.scss"
import { IProduct } from "../../types"

interface ICartItemProps {
	product: IProduct
}

const CartItem: FC<ICartItemProps> = ({ product }) => {
	const { image, title, description, category, price, amount, id } = product

	const dispatch = useDispatch()

	const minusProduct = (id: number) => {
		dispatch(decrementAmount(id))
	}

	const plusProduct = (id: number) => {
		dispatch(incrementAmount(id))
	}

	const deleteProduct = (id: number) => {
		dispatch(setRemove(id))
	}

	const priceToRender = (amount * price).toFixed(2)

	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src={image} alt={category} />
			</div>
			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.description}>
					<p>{description}</p>
				</div>
				<div className={styles.price}>${price}</div>
			</div>
			<div className={styles.buttons}>
				<button className={styles.btn} onClick={() => minusProduct(id)}>
					-
				</button>
				<span className={styles.amount}>{amount}</span>
				<button className={styles.btn} onClick={() => plusProduct(id)}>
					+
				</button>
			</div>
			<div className={styles.block}>
				<div className={styles.total}>${priceToRender}</div>
				<button className={styles.remove} onClick={() => deleteProduct(id)}>
					Remove
				</button>
			</div>
		</div>
	)
}

export default CartItem

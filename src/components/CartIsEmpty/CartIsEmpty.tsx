import React, { FC } from "react"

import styles from "./CartIsEmpty.module.scss"

const CartIsEmpty: FC = () => {
	return <h2 className={styles.container}>Cart is empty</h2>
}

export default CartIsEmpty

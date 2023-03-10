import React, { FC } from "react"
import { Link } from "react-router-dom"

import styles from "./Logo.module.scss"

const Logo: FC = () => {
	return (
		<Link className={styles.container} to="/">
			<span className={styles.letter}>S</span>
			<span className={styles.name}>Shopka</span>
		</Link>
	)
}

export default Logo

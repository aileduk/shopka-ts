import React, { FC } from "react"
import { Outlet } from "react-router-dom"

import Logo from "../Logo/Logo"
import CartButton from "../CartButton/CartButton"

import styles from "./Header.module.scss"

const Header: FC = () => {
	return (
		<>
			<header className={styles.container}>
				<Logo />
				<CartButton />
			</header>
			<Outlet />
		</>
	)
}

export default Header

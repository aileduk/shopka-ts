import React, { FC } from "react"
import { Route, Routes } from "react-router-dom"

import Header from "../components/Header/Header"
import MainPage from "./MainPage"
import CartPage from "./CartPage"
import ProductPage from "./ProductPage"

const Root: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<MainPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/product/:productId" element={<ProductPage />} />
			</Route>
		</Routes>
	)
}

export default Root

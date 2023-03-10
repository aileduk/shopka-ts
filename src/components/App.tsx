import React, { FC, useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"

import Preloader from "./Preloader/Preloader"
import Root from "../pages/Root"
import Error from "./Error/Error"

import { fetchProducts } from "../store/catalog/catalog.slice"

const App: FC = () => {
	const dispatch = useAppDispatch()
	const { status, error } = useAppSelector(state => state.catalog)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<>
			{status === "loading" && <Preloader />}
			{status === "success" && <Root />}
			{error && status === "error" && <Error error={error} />}
		</>
	)
}

export default App

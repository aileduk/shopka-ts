import React, { FC } from "react"

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"

import { setFilter, setSort } from "../../store/catalog/catalog.slice"

import styles from "./Categories.module.scss"

const Categories: FC = () => {
	const dispatch = useAppDispatch()
	const { categories, sort, filter } = useAppSelector(state => state.catalog)

	const handleFiltering = (value: string | null) => {
		dispatch(setFilter(value === filter ? null : value))
	}

	const handleSorting = (value: string) => {
		dispatch(setSort(value))
	}

	return (
		<aside className={styles.container}>
			<h2 className={styles.title}>Categories</h2>
			<ul className={styles.list}>
				{categories.map(category => (
					<li className={filter === category ? `${styles.category} ${styles.active}` : styles.category} key={category}>
						<button onClick={() => handleFiltering(category)}>{category}</button>
					</li>
				))}
			</ul>
			<label className={styles.sort}>Sort by</label>
			<select defaultValue={sort} className={styles.select} onChange={e => handleSorting(e.target.value)}>
				<option value="default">default</option>
				<option value="asc">low to hight</option>
				<option value="desc">hight to low</option>
			</select>
		</aside>
	)
}

export default Categories

import React, { FC, useEffect, useState } from "react"

import styles from "./ScrollButton.module.scss"

const ScrollButton: FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const handleScroll = () => {
		if (window.pageYOffset > window.screen.height) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	return (
		<button onClick={scrollToTop} className={isVisible ? `${styles.button} ${styles.visible}` : styles.button}>
			&#8657;
		</button>
	)
}

export default ScrollButton

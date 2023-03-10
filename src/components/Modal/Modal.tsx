import React, { FC } from "react"

import styles from "./Modal.module.scss"

interface ModalProps {
	active: boolean
	toggleModal: () => void
}

const Modal: FC<ModalProps> = ({ active, toggleModal }) => {
	return (
		<div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={toggleModal}>
			<div className={styles.content} onClick={e => e.stopPropagation()}>
				<p>Thanks for shopping</p>
				<a href="/">Back to home page</a>
			</div>
		</div>
	)
}

export default Modal

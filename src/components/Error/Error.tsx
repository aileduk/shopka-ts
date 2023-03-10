import React, { FC } from "react"

import styles from "./Error.module.scss"

interface ErrorProps {
	error: string
}

const Error: FC<ErrorProps> = ({ error }) => {
	return <div className={styles.container}>Error: {error}</div>
}

export default Error

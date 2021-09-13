import React from 'react'

import styles from "./Input.module.scss"

interface Props {
    description: string
}

const Input: React.FC<Props> = (props) => {

    const {description} = props

    return (
        <input 
            type="submit" 
            value={description} 
            className={styles.inputAmount}>
        </input>
    )
}

export default Input
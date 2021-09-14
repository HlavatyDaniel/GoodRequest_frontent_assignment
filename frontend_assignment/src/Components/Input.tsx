import React from 'react'

import styles from "./Input.module.scss"

import CSS from 'csstype'
interface Props {
    description: string
}

const Input: React.FC<Props> = (props) => {

    const {description} = props

    const inputSizeStyle: CSS.Properties = {
        width: (description.length*6 - description.length + 50).toString() + "px"
    }

    return (
        <input 
            style={inputSizeStyle}
            type="submit" 
            value={description} 
            className={styles.inputAmount}
            >
        </input>
    )
}

export default Input
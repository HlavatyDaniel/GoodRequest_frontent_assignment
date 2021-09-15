import React, {useState, useEffect} from 'react'

import styles from "./Input.module.scss"

import CSS from 'csstype'
import { Styles } from 'react-select'
interface Props {
    description: string
}

const Input: React.FC<Props> = (props) => {

    const {description} = props

    // const [inputActive, setInputActive] = useState('')

    // useEffect(() => {
    //     const initInputState = () => {
    //         setInputActive(styles.inputAmount)
    //     }

    //     initInputState()
    // });

    // const setActive = () => {
    //     setInputActive(styles.inputAmountActive)
    // }

    const inputSizeStyle: CSS.Properties = {
        width: (description.length*6 - description.length + 50).toString() + "px"
    }

    return (
        <input 
            style={inputSizeStyle}
            type="submit" 
            value={description} 
            className={styles.inputAmount }
            // onClick={setActive}
            >
        </input>
    )
}

export default Input
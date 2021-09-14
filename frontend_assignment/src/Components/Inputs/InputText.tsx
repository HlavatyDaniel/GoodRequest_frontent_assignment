import React from 'react'

// import Paragraph from '../Parts/Paragraph'
// import { ParagraphTypes } from '../../Types/types'

import styles from "./InputText.module.scss"

interface Props  {
    label1 : string,
    label2 : string,
    label3? : string
}

const InputText: React.FC<Props> = (props) => {

    return (
        <div>
            {props.label3 !== null &&
            <label 
                className={styles.topLabel}
            >{props.label3}</label>
            }
            <div className={styles.inputContainer}>
                <label className={styles.typeLabel}>{props.label1}</label>
                <label className={styles.optionsLabel}>{props.label2}</label>
                <input
                    className={styles.inputStyle}
                    type="text"
                >
                </input>
            </div>
        </div>
    )
}

export default InputText
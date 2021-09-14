import React from 'react'

// import Paragraph from '../Parts/Paragraph'
// import { ParagraphTypes } from '../../Types/types'

import styles from "./InputText.module.scss"

const InputText: React.FC = () => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.typeLabel}>Meno</label>
            <label className={styles.optionsLabel}>Zadajte Vaše meno</label>
            <input
                className={styles.inputStyle}
                type="text"
            >
            </input>
        </div>
    )
}

export default InputText
import React from 'react'

import Paragraph from './Paragraph'
import { ParagraphTypes } from '../Types/types'

import styles from "./Select.module.scss"

// const options = [
//     {value: 'firstOption', label: 'firstOption'},
//     {value: 'secondOption', label: 'secondOption'}
// ]

const MySelect: React.FC = () => {
    return (
        <div>
            <div className={styles.paragraphContainer}>
                <Paragraph
                    text="O Projekte"
                    paragraphType= {ParagraphTypes.LabelLeft}
                ></Paragraph>
                <Paragraph
                    text="Nepovinné"
                    paragraphType= {ParagraphTypes.LabelRight}
                ></Paragraph>
            </div>
            <div className= {styles.selectContainer}>
                <label className={styles.typeLabel}>Útulok</label>
                <label className={styles.optionsLabel}>Vyberte útulok zo zoznamu</label>
                <select
                className={styles.selectUtulok}>
                </select>
            </div>


        </div>
    )
}

export default MySelect
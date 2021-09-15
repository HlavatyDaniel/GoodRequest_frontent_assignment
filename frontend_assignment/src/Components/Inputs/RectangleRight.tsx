import React from 'react'
import Paragraph from '../Parts/Paragraph';

import styles from "./RectangleRight.module.scss"

import PawLogo from "../../Assets/PawLogo.png"

import { ParagraphTypes } from '../../Types/types'

interface Props {
    text: string
}

const RectangleRight: React.FC<Props> = (props) => {
    
    return (
        <div className={styles.rectangleGeneral}>
            <div>
                <img className={styles.pawLogo} src={PawLogo} alt="PawLogo"/>
            </div>     
            <div className={styles.paragraph}>
                <Paragraph
                    text = "Chcem finančne prispieť celej nadácii"
                    paragraphType = {ParagraphTypes.RectangleRight}
                ></Paragraph>
            </div>       
        </div>
    )
}

export default RectangleRight
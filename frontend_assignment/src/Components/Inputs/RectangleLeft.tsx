import React from 'react'
import Paragraph  from '../Parts/Paragraph'

import styles from "./RectangleLeft.module.scss"

import WalletLogo from "../Assets/Wallet.png"

import { ParagraphTypes } from '../../Types/types'

interface Props {
    text: string
}

const RectangleLeft: React.FC<Props> = (props) => {
    
    return (
        <div className={styles.rectangleConcrete}>
            <div>
                <img className={styles.walletLogo} src={WalletLogo} alt="WalletLogo"/>
            </div>
            <div className={styles.paragraph}>
                <Paragraph
                text="Chcem finančne prispieť konkrétnemu útulku"
                paragraphType = {ParagraphTypes.RectangleLeft}
                ></Paragraph>
            </div>
        </div>
    )
}

export default RectangleLeft
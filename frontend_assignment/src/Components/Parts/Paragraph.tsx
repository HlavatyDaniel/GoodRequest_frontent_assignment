import React from 'react'
import { ParagraphTypes } from '../../Types/types'

import styles from "./Paragraph.module.scss"

interface Props {
        text: string
        paragraphType: ParagraphTypes
}

const Paragraph: React.FC<Props> = (props) => {
    
    var className = ""

    if (props.paragraphType === ParagraphTypes.FooterAbout)
        className = styles.footerAbout
    else if (props.paragraphType === ParagraphTypes.FooterLogo)
        className = styles.footerLogo
    else if (props.paragraphType === ParagraphTypes.FooterNote)
        className = styles.footerNote
    else if (props.paragraphType === ParagraphTypes.FooterTitle)
        className = styles.footerTitle
    else if (props.paragraphType === ParagraphTypes.RectangleLeft)
        className = styles.rectangleLeft
    else if (props.paragraphType === ParagraphTypes.RectangleRight)
        className = styles.rectangleRight
    else if (props.paragraphType === ParagraphTypes.LabelLeft)
        className = styles.labelLeft
    else if (props.paragraphType === ParagraphTypes.LabelRight)
        className = styles.labelRight
    else if (props.paragraphType === ParagraphTypes.LabelMain)
        className = styles.labelMain

    return (
        <p className={className}>{props.text}</p>
    )
}

export default Paragraph
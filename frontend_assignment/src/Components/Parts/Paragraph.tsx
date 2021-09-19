import React from 'react'
import { ParagraphTypes } from '../../Types/types'

import styles from "./Paragraph.module.scss"

interface Props {
        text: string
        paragraphType: ParagraphTypes
}

const Paragraph: React.FC<Props> = (props) => {
    
    var className = ""

    if (props.paragraphType === ParagraphTypes.FOOTERABOUT)
        className = styles.footerAbout
    else if (props.paragraphType === ParagraphTypes.FOOTERNOTE)
        className = styles.footerNote
    else if (props.paragraphType === ParagraphTypes.FOOTERTITLE)
        className = styles.footerTitle
    else if (props.paragraphType === ParagraphTypes.RECTANGLELEFTACTIVE)
        className = styles.rectangleLeftActive
    else if (props.paragraphType === ParagraphTypes.RECTANGLERIGHTACTIVE)
        className = styles.rectangleRightActive
    else if (props.paragraphType === ParagraphTypes.RECTANGLELEFTINACTIVE)
        className = styles.rectangleLeftInactive
    else if (props.paragraphType === ParagraphTypes.RECTANGLERIGHTINACTIVE)
        className = styles.rectangleRightInactive
    else if (props.paragraphType === ParagraphTypes.LABELLEFT)
        className = styles.labelLeft
    else if (props.paragraphType === ParagraphTypes.LABELRIGHT)
        className = styles.labelRight
    else if (props.paragraphType === ParagraphTypes.LABELMAIN)
        className = styles.labelMain
    else if (props.paragraphType === ParagraphTypes.LABELDATA)
        className = styles.labelData
    else if (props.paragraphType === ParagraphTypes.LABELFORM)
        className = styles.labelForm
    else if (props.paragraphType === ParagraphTypes.LINKS)
        className = styles.links
        
    return (
        <p className={className}>{props.text}</p>
    )
}

export default Paragraph
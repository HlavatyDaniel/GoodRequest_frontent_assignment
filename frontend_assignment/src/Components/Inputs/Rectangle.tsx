import React from 'react'

import Paragraph from "../Parts/Paragraph"
import { ParagraphTypes, RectangleType } from '../../Types/types'

import WalletLogoActive from "../../Assets/WalletActive.png"
import WalletLogoInactive from "../../Assets/WalletInactive.png"
import PawLogoActive from "../../Assets/PawLogoActive.png"
import PawLogoInactive from "../../Assets/PawLogoInactive.png"

import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { setRectangle } from '../../state/action-creators/actionCreators'
import { RootState } from '../../state/reducers'

import styles from "./Rectangle.module.scss"

interface Props {
    type: RectangleType,
    active: boolean
}

const Rectangle: React.FC<Props> = (props) => {

    const dispatchRectangle = useDispatch();
    const actionSetRectangle = bindActionCreators(setRectangle, dispatchRectangle)

    const rectangleData : RectangleType = useSelector((state : RootState) => state.rectangleData)

    interface Style {
        divClass : string,
        logo : string,
        paragraphType : ParagraphTypes
        text: string
    }

    let style : Style;

    if (props.type === RectangleType.CONRETE && props.active)
        style = {divClass: styles.rectangleConreteActive, logo: WalletLogoActive, 
            paragraphType: ParagraphTypes.RECTANGLELEFTACTIVE, text: "Chcem finančne prispieť konkrétnemu útulku"}
    else if (props.type === RectangleType.CONRETE && !props.active)
        style = {divClass: styles.rectangleConreteInactive, logo: WalletLogoInactive, 
            paragraphType: ParagraphTypes.RECTANGLELEFTINACTIVE, text: "Chcem finančne prispieť konkrétnemu útulku"}
    else if (props.type === RectangleType.GENERAL && props.active)
        style = {divClass: styles.rectangleGeneralActive, logo: PawLogoActive, 
            paragraphType: ParagraphTypes.RECTANGLERIGHTACTIVE, text: "Chcem finančne prispieť celej nadácii"}
    else if (props.type === RectangleType.GENERAL && !props.active)
        style = {divClass: styles.rectangleGeneralInactive, logo: PawLogoInactive, 
            paragraphType: ParagraphTypes.RECTANGLERIGHTINACTIVE, text: "Chcem finančne prispieť celej nadácii"}
    else
        return (<div></div>)

    const handleClick = () => {
        if (rectangleData === props.type)
            actionSetRectangle(RectangleType.NONE)
        else
            actionSetRectangle(props.type)
    }

    return (
        <div className={style.divClass} onClick={handleClick}>
        
            <div>
                <img className={styles.logo} src={style.logo} alt="logo"></img>
            </div>

            <div className={styles.paragraph}>
                <Paragraph
                    text={style.text}
                    paragraphType = {style.paragraphType}
                ></Paragraph>
            </div>

        </div>
    )
}

export default Rectangle
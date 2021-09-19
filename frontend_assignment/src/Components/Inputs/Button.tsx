import React from 'react'

import { ButtonTypes } from '../../Types/types';

import styles from "./Button.module.scss"

import CSS from 'csstype'
interface Props {
    text : string
    buttonType : ButtonTypes
    onClick?: () => void
}

const Button: React.FC<Props> = (props) => {

    var className = "";

    if (props.buttonType === ButtonTypes.LEFT)
        className = styles.buttonLeft
    if (props.buttonType === ButtonTypes.RIGHTACTIVE)
        className = styles.buttonRightActive
    if (props.buttonType === ButtonTypes.RIGHTINACTIVE)
        className = styles.buttonRightInactive

    const buttonSizeStyle: CSS.Properties = {
        width: (props.text.length*7 + 60).toString() + "px"
    }

    const handleOnClick = () => {
        if (props.onClick)
            props.onClick()
    }

    return (
        <button
            className={className} 
            style={buttonSizeStyle}
            onClick={handleOnClick}
        >
        {props.text}
        </button>
    )
}

export default Button
import React from 'react'

import { ButtonTypes } from '../../Types/types';

import styles from "./Button.module.scss"

import CSS from 'csstype'
interface Props {
    text : string
    buttonType : ButtonTypes
}

const Button: React.FC<Props> = (props) => {

    var className = "";

    if (props.buttonType === ButtonTypes.Left)
        className = styles.buttonLeft
    if (props.buttonType === ButtonTypes.Right)
        className = styles.buttonRight

    const buttonSizeStyle: CSS.Properties = {
        width: (props.text.length*7 + 60).toString() + "px"
    }

    return (
        <button
            className={className} 
            style={buttonSizeStyle}
        >
        {props.text}
        </button>
    )
}

export default Button
import React from 'react'

import CSS from 'csstype'

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { setInputValue } from "../../state/action-creators/actionCreators"
import { InputOption } from '../../Types/types'

interface Props {
    value: number,
    inputId: number,
    className : string,
}

const Input: React.FC<Props> = (props) => {

    const dispatchPick = useDispatch();
    const actionPickCreator = bindActionCreators(setInputValue, dispatchPick);
    const thisInput : InputOption = {id : props.inputId, value : props.value}

    const description : string = props.value.toString() + "€";
    const inputSizeStyle: CSS.Properties = {
        width: (description.length*6 - description.length + 50).toString() + "px"
    }

    const handleClick = () => {
        actionPickCreator(thisInput);
    }

    return (      
            <input
                style={inputSizeStyle}
                type="submit" 
                value={description} 
                className = {props.className}
                onClick={handleClick}
            ></input>
    )
}

export default Input
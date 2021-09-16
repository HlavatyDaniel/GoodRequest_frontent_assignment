import React, {useState, useEffect} from 'react'

import styles from "./Input.module.scss"

import CSS from 'csstype'
import { Styles } from 'react-select'

import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { setInputValue } from "../../state/action-creators/actionCreators"
import { RootState } from "../../state/reducers"
import selectReducer from '../../state/reducers/selectReducer'
import { InputOption } from '../../Types/types'

interface Props {
    value: number,
    inputId: number,
    className : string
}

const Input: React.FC<Props> = (props) => {

    const pickedInput : InputOption = useSelector((state : RootState) => state.inputItem)
    const dispatchPick = useDispatch();
    const actionPickCreator = bindActionCreators(setInputValue, dispatchPick);
    const thisInput : InputOption = {id : props.inputId, value : props.value}

    const description : string = props.value.toString() + "€";
    const inputSizeStyle: CSS.Properties = {
        width: (description.length*6 - description.length + 50).toString() + "px"
    }

    const handleClick = (event : React.FormEvent<HTMLInputElement>) => {
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
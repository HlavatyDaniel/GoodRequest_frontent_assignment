import React from 'react'

import CSS from 'csstype'

import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { setInputValue } from "../../state/action-creators/actionCreators"
import { InputOption } from '../../Types/types'
import { RootState } from "../../state/reducers"

import styles from "./Input.module.scss"

interface Props {
    inputOption : InputOption,
    active : boolean
}

const Input: React.FC<Props> = (props) => {

    const dispatchPick = useDispatch();
    const actionPickCreator = bindActionCreators(setInputValue, dispatchPick);

    const sumData : InputOption = useSelector((state : RootState) => state.sumData)

    const className = props.active ? styles.inputAmountActive : styles.inputAmountInactive

    const description : string = props.inputOption.value.toString() + "€";
    const inputSizeStyle: CSS.Properties = {
        width: (description.length*6 - description.length + 50).toString() + "px"
    }

    const handleClick = () => {
        if (sumData.id === props.inputOption.id)
        {
            let inputOption : InputOption = {id : 0, value: 0}
            actionPickCreator(inputOption)
        }

        else
            actionPickCreator(props.inputOption);
    }

    return (      
            <input
                style={inputSizeStyle}
                type="submit" 
                value={description} 
                className = {className}
                onClick={handleClick}
            ></input>
    )
}

export default Input
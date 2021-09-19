import React from 'react'

import CSS from 'csstype'

import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { setInputValue } from "../../state/action-creators/actionCreators"
import { SumOption } from '../../Types/types'
import { RootState } from "../../state/reducers"

import styles from "./Input.module.scss"

interface Props {
    sumOption : SumOption,
    active : boolean
}

const Input: React.FC<Props> = (props) => {

    const dispatchPick = useDispatch();
    const actionPickCreator = bindActionCreators(setInputValue, dispatchPick);

    const sumData : SumOption = useSelector((state : RootState) => state.sumData)

    const className = props.active ? styles.inputAmountActive : styles.inputAmountInactive

    const description : string = props.sumOption.value.toString() + "€";
    const inputSizeStyle: CSS.Properties = {
        width: (description.length*6 - description.length + 50).toString() + "px"
    }

    const handleClick = () => {
        if (sumData.id === props.sumOption.id)
        {
            let sumOption : SumOption = {id : 0, value: 0}
            actionPickCreator(sumOption)
        }

        else
            actionPickCreator(props.sumOption);
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
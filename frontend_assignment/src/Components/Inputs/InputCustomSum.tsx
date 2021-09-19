import React, {useRef, useEffect} from 'react'

import styles from "./InputCustomSum.module.scss"
import { useDispatch, useSelector} from "react-redux"
import { bindActionCreators } from "redux"
import { setInputValue } from "../../state/action-creators/actionCreators"
import { InputOption } from '../../Types/types'
import { RootState } from "../../state/reducers"

interface Props {
    id : number
    active : boolean
}

const InputCustomSum: React.FC<Props> = (props) => {

    const dispatchPick = useDispatch();
    const actionPickCreator = bindActionCreators(setInputValue, dispatchPick);

    const sumData : InputOption = useSelector((state : RootState) => state.sumData)

    const inputRef  = useRef<HTMLInputElement>(null)

    const classNameInput = props.active ? styles.inputCustomSumActive 
                                        : styles.inputCustomSumInactive
    const classNameEuroSign = props.active  ? styles.inputEuroSignActive
                                            : styles.inputEuroSignInactive
    const classNameDiv = props.active   ? styles.inputCustomSumDivActive
                                        : styles.inputCustomDivInactive

    useEffect(() => {
        const setValue = () => {
            if (props.id === sumData.id && sumData.value !== 0 && inputRef.current)
                inputRef.current.value = sumData.value.toString();
        }

        setValue();
    });

    const handleChange = () => {

        if (inputRef.current)
        {
            inputRef.current.value = inputRef.current.value.replace(/\D/g,'');

            let inputOption : InputOption = {id : 7, value : 0};
            if (inputRef.current.value)
                inputOption.value = +inputRef.current.value

            actionPickCreator(inputOption)
        }
    }

    const handleClick = () => {
        if (inputRef.current)
        {               
            let inputOption : InputOption = {id : 7, value: 0};
            if (inputRef.current.value)
                inputOption.value = +inputRef.current.value

            actionPickCreator(inputOption)
        }
    }

    return (
        <div className={classNameDiv}>
            <input
                type="text"
                className={classNameInput}
                onChange={handleChange}
                onClick={handleClick}
                ref={inputRef}
            >
            </input>
            <p className={classNameEuroSign}>
            €
            </p>
        </div>  
    )
}

export default InputCustomSum
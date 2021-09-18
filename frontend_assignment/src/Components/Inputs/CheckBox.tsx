import React from 'react'

import styles from "./CheckBox.module.scss"

import { useDispatch} from "react-redux"
import { bindActionCreators } from "redux"
import { setCheckbox } from "../../state/action-creators/actionCreators"

import { useSelector } from "react-redux"
import { RootState } from "../../state/reducers"

const CheckBox: React.FC = () => {

    const dispatchPick = useDispatch();
    const actionPickCreator = bindActionCreators(setCheckbox, dispatchPick)
    const checkBoxData : boolean = useSelector((state : RootState) => state.checkBoxData)

    const handleClick = () => {
        if (checkBoxData)
            actionPickCreator(false)
        else
            actionPickCreator(true) 
    }

    return (
        <div>
            <label 
                className={styles.checkBoxLabel}
            >
                <input
                    type="checkbox"
                    className={styles.checkBox}
                    onClick={handleClick} 
                ></input>
                <span className={styles.span}>Súhlasím so spracovaním mojich osobných údajov</span>
            </label>
        </div>
    )
}

export default CheckBox
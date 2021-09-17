import React, {useState, useEffect, useRef} from 'react'

import { Data, PersonalInformationData } from '../../Types/types'

import styles from "./InputText.module.scss"

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { setEmail, setPhoneNumber, setName, setSurname } from "../../state/action-creators/actionCreators"
import { useSelector } from "react-redux"
import { RootState } from "../../state/reducers"

interface Props  {
    label1 : string,
    label2 : string,
    label3? : string,
    type : Data
}

const InputText: React.FC<Props> = (props) => {

    const dispatchSetter = useDispatch();
    const actionSetEmail = bindActionCreators(setEmail, dispatchSetter)
    const actionSetPhoneNumber = bindActionCreators(setPhoneNumber, dispatchSetter)
    const actionSetName = bindActionCreators(setName, dispatchSetter)
    const actionSetSurname = bindActionCreators(setSurname, dispatchSetter)

    const inputRef = useRef<HTMLInputElement>(null)

    const [labelsHidden, setLabelsHidden] = useState<boolean>(false)

    const personalData : PersonalInformationData = useSelector((state : RootState) => state.personalData)

    useEffect(() => {
        const setText = () => {
            var text : string;

            switch(props.type)
            {
                case Data.NAME:
                    text = personalData.name
                    break;
                case Data.SURNAME:
                    text = personalData.surName
                    break;
                case Data.EMAIL:
                    text = personalData.email
                    break;
                case Data.PHONENUMBER:
                    text = personalData.phoneNumber
                    break;
                default:
                    text = ""
            }

            if (text !== "" && inputRef.current)
            {
                inputRef.current.value = text
                setLabelsHidden(true)
            }
        }

        setText();
    });

    const handleChange = () => {

        setLabelsHidden(true)
        if (inputRef.current?.value === "")
            setLabelsHidden(false)

        if (inputRef.current?.value)
        {
            switch (props.type) {
                case Data.NAME:
                    actionSetName(inputRef.current.value)
                    break;
                case Data.SURNAME:
                    actionSetSurname(inputRef.current.value)
                    break;
                case Data.EMAIL:
                    actionSetEmail(inputRef.current.value)
                    break;
                case Data.PHONENUMBER:
                    actionSetPhoneNumber(inputRef.current.value)
                    break;
            }
        }
    }

    return (
        <div>

            {props.label3 !== null &&
            <label 
                className={styles.topLabel}
            >{props.label3}</label>
            }

            <div className={styles.inputContainer}>

                <label hidden={labelsHidden} className={styles.typeLabel}>{props.label1}</label>
                <label hidden={labelsHidden} className={styles.optionsLabel}>{props.label2}</label>
                
                <input
                    className={styles.inputStyle}
                    type="text"
                    onChange={handleChange}
                    ref={inputRef}
                >
                </input>

            </div>
            
        </div>
    )
}

export default InputText
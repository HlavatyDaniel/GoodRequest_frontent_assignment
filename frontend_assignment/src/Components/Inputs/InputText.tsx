import React, {useState, useEffect, useRef} from 'react'

import { Data, PersonalInformationData } from '../../Types/types'

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { setEmail, setPhoneNumber, setName, setSurname } from "../../state/action-creators/actionCreators"
import { useSelector } from "react-redux"
import { RootState } from "../../state/reducers"

import SlovakiaFlag from "../../Assets/SlovakiaFlag.png"

import styles from "./InputText.module.scss"

interface Props  {
    label1 : string,
    label2 : string,
    label3? : string,
    type : Data,
    onDataChange: (value : boolean) => void
}

const InputText: React.FC<Props> = (props) => {

    const dispatchSetter = useDispatch();
    const actionSetEmail = bindActionCreators(setEmail, dispatchSetter)
    const actionSetPhoneNumber = bindActionCreators(setPhoneNumber, dispatchSetter)
    const actionSetName = bindActionCreators(setName, dispatchSetter)
    const actionSetSurname = bindActionCreators(setSurname, dispatchSetter)
    const personalData : PersonalInformationData = useSelector((state : RootState) => state.personalData)

    const inputRef = useRef<HTMLInputElement>(null)

    const [labelsHidden, setLabelsHidden] = useState<boolean>(false)

    const maxLength = props.type === Data.PHONENUMBER ? 13 : 99

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
        {
            switch (props.type) {
                case Data.NAME:
                    actionSetName("")
                    break;
                case Data.SURNAME:
                    actionSetSurname("")
                    break;
                case Data.EMAIL:
                    actionSetEmail("")
                    break;
                case Data.PHONENUMBER:
                    actionSetPhoneNumber("")
                    break;
            }
            setLabelsHidden(false)
        }

        if (inputRef.current?.value)
        {
            switch (props.type) {
                case Data.NAME:
                    inputRef.current.value = inputRef.current.value.replace(/[&\d+/\\#,+-@()$~%.'":*?<>{}\s]/g, '');
                    actionSetName(inputRef.current.value)
                    break;
                case Data.SURNAME:
                    inputRef.current.value = inputRef.current.value.replace(/[&\d+/\\#,+-@()$~%.'":*?<>{}\s]/g, '');
                    actionSetSurname(inputRef.current.value)
                    break;
                case Data.EMAIL:
                    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputRef.current.value))
                        actionSetEmail(inputRef.current.value)
                    else
                        actionSetEmail("");
                    break;
                case Data.PHONENUMBER:
                    inputRef.current.value = inputRef.current.value.replace(/\D/g,'');

                    const preset = "+421"
                    if (!inputRef.current.value.startsWith(preset))
                        inputRef.current.value = preset + inputRef.current.value.substr(3);
                    
                    if (inputRef.current.value.length === 13)
                        actionSetPhoneNumber(inputRef.current.value)
                    break;
            }

            if (checkData())
                props.onDataChange(true)
            else
                props.onDataChange(false)
        }
    }

    const checkData = () => {

        if (personalData.name !== '' && personalData.email !== '' &&
            personalData.phoneNumber !== '' && personalData.surName !== '')
            return true;

        return false;
    }

    const handleClick = () => {
        if (props.type === Data.PHONENUMBER)
        {
            if (inputRef.current)
            {
                if (inputRef.current.value === "")
                {
                    inputRef.current.value = "+421"
                    setLabelsHidden(true);
                }
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
                
                <label 
                    hidden={labelsHidden} 
                    className={styles.typeLabel}
                >{props.label1}</label>
                <div className={styles.labelDiv}>
                    <div className={styles.labelGrid}>
                    {
                        props.type === Data.PHONENUMBER &&
                        <img 
                            src={SlovakiaFlag} 
                            hidden={labelsHidden} 
                            className={styles.imgLabel}
                            alt="Flag"
                        />
                    }
                    <label
                        hidden={labelsHidden}
                        className={styles.optionsLabel}
                    >{props.label2}</label>
                    </div>
                </div>

                <input
                    className={styles.inputStyle}
                    type="text"
                    onChange={handleChange}
                    onClick={handleClick}
                    ref={inputRef}
                    maxLength={maxLength}
                ></input>
            </div>
            
        </div>
    )
}

export default InputText
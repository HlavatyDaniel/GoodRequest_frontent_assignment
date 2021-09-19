import React, {useState} from 'react'

import {NavLink} from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../state/reducers"

import Header from "../Components/Parts/Header"
import Footer from "../Components/Parts/Footer"
import InputText from "../Components/Inputs/InputText"
import Button from "../Components/Inputs/Button"
import Links from "../Components/Parts/Links"
import { ButtonTypes, Data, PersonalInformationData } from "../Types/types"

import GoodDogoResized from "../Assets/GoodDogoResized.png"

import styles from "./View2.module.scss"

const View2: React.FC = () => {

    //const personalData : PersonalInformationData = useSelector((state : RootState) => state.personalData)

    const [dataFilled, setDataFilled] = useState<boolean>(false)

    const handleDataChange = (value : boolean) => {
        setDataFilled(value)
    }

    return (
        <div>

            <div className={styles.container}>

                <div className={styles.links}>
                    <Links/>
                </div>  

                <div className={styles.header}>
                    <Header viewName='Potrebujeme od Vás zopár informácií'/>
                </div>

                <div className={styles.inputsContainer}>
                    <InputText
                        label1 = "Meno"
                        label2 = "Zadajte Vaše meno"
                        label3 = "O Vás"
                        type = {Data.NAME}
                        onDataChange={handleDataChange}
                    />
                    <InputText
                        label1 = "Priezvisko"
                        label2 = "Zadajte Vaše priezvysko"
                        type = {Data.SURNAME}
                        onDataChange={handleDataChange}
                    />
                    <InputText
                        label1 = "E-mailová adresa"
                        label2 = "Zadajte Váš e-mail"
                        type = {Data.EMAIL}
                        onDataChange={handleDataChange}
                    />
                    <InputText
                        label1 = "Telefónne číslo"
                        label2 = "+421"
                        type = {Data.PHONENUMBER}
                        onDataChange={handleDataChange}
                    />
                </div>

                <div className={styles.buttonBack}>
                    <NavLink 
                        to = "/"
                    >
                        <Button
                            text = "Späť"
                            buttonType = {ButtonTypes.LEFT}
                        />
                    </NavLink>
                </div>

                <div className={styles.buttonNext}>
                {
                        dataFilled 
                        ?   <NavLink 
                                to = "/Confimation"
                            >
                            <Button
                                text = "Pokračovať"
                                buttonType = {ButtonTypes.RIGHTACTIVE}
                            />
                            </NavLink>
                        :   <Button
                                text = "Pokračovať"
                                buttonType = {ButtonTypes.RIGHTINACTIVE}
                            />
                    }
                </div>

                <div className={styles.imageContainer}>
                    <img src={GoodDogoResized} alt="GoodDogo"/>
                </div>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default View2
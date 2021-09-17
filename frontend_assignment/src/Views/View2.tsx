import {NavLink} from "react-router-dom"

import Header from "../Components/Parts/Header"
import Footer from "../Components/Parts/Footer"
import InputText from "../Components/Inputs/InputText"
import Button from "../Components/Inputs/Button"
import { ButtonTypes, Data } from "../Types/types"

import GoodDogo from "../Assets/GoodDogo.png"

import styles from "./View2.module.scss"

const View2: React.FC = () => {

    return (
        <div>
            <div className={styles.container}>

                <div className={styles.header}>
                    <Header viewName='Potrebujeme od Vás zopár informácií'/>
                </div>

                <div className={styles.inputsContainer}>
                    <InputText
                        label1 = "Meno"
                        label2 = "Zadajte Vaše meno"
                        label3 = "O Vás"
                        type = {Data.NAME}
                    />
                    <InputText
                        label1 = "Priezvisko"
                        label2 = "Zadajte Vaše priezvysko"
                        type = {Data.SURNAME}
                    />
                    <InputText
                        label1 = "E-mailová adresa"
                        label2 = "Zadajte Váš e-mail"
                        type = {Data.EMAIL}
                    />
                    <InputText
                        label1 = "Telefónne číslo"
                        label2 = "+421"
                        type = {Data.PHONENUMBER}
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
                    <NavLink 
                        to = "/Confimation"
                    >
                        <Button
                            text = "Pokračovať"
                            buttonType = {ButtonTypes.RIGHT}
                        />
                    </NavLink>
                </div>

                <div className={styles.imageContainer}>
                    <img src={GoodDogo} alt="GoodDogo"/>
                </div>
            </div>

            <div>
                <hr/>
                <Footer>
                </Footer>
            </div>
        </div>
    )
}

export default View2
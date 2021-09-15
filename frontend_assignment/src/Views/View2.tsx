import styles from "./View2.module.scss"

import GoodDogo from "../Assets/GoodDogo.png"

import Header from "../Components/Parts/Header"
import Footer from "../Components/Parts/Footer"
import InputText from "../Components/Inputs/InputText"
import Button from "../Components/Inputs/Button"
import { ButtonTypes } from "../Types/types"

import {NavLink} from "react-router-dom"

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
                    />
                    <InputText
                        label1 = "Priezvisko"
                        label2 = "Zadajte Vaše priezvysko"
                    />
                    <InputText
                        label1 = "E-mailová adresa"
                        label2 = "Zadajte Váš e-mail"
                    />
                    <InputText
                        label1 = "Telefónne číslo"
                        label2 = "+421"
                    />
                </div>

                <div className={styles.buttonBack}>
                    <NavLink 
                        to = "/"
                    >
                        <Button
                            text = "Späť"
                            buttonType = {ButtonTypes.Left}
                        />
                    </NavLink>
                </div>

                <div className={styles.buttonNext}>
                    <NavLink 
                        to = "/Confimation"
                    >
                        <Button
                            text = "Pokračovať"
                            buttonType = {ButtonTypes.Right}
                        />
                    </NavLink>
                </div>

                <div className={styles.imageContainer}>
                    <img src={GoodDogo} alt="GoodDogo"/>
                </div>
            </div>

            <div>
                <hr className={styles.line}/>
                <Footer>
                </Footer>
            </div>
        </div>
    )
}

export default View2
import styles from "./View3.module.scss"

import GoodDogo from "../Assets/GoodDogo.png"

import Header from "../Components/Parts/Header"
import Footer from "../Components/Parts/Footer"
import Button from "../Components/Inputs/Button"
import Paragraph from "../Components/Parts/Paragraph"

import { NavLink } from "react-router-dom"

import { ButtonTypes, ParagraphTypes, InputOption, PersonalInformationData, UtulokOption} from "../Types/types"

import { useSelector } from "react-redux"
import { RootState } from "../state/reducers"

const View3: React.FC = () => {

    const sumData : InputOption = useSelector((state : RootState) => state.sumData)
    const utulokData : UtulokOption = useSelector((state : RootState) => state.utulokData)
    const personalData : PersonalInformationData = useSelector((state : RootState) => state.personalData)

    return (
        <div>
            <div className={styles.container}>

                <div className={styles.header}>
                    <Header viewName='Skontrolujte si zadané údaje'/>
                </div>

                <div className={styles.paragraphContainer}>
                    <div className={styles.paragraphGrid}>
                        <div className={styles.paragraphForm}>
                            <Paragraph
                                text = "Akou formou chcem pomôcť"
                                paragraphType = {ParagraphTypes.LabelForm}
                            ></Paragraph>
                            <Paragraph
                                text= "Chcem finančne prispieť celej nadácii"
                                paragraphType = {ParagraphTypes.LabelData}
                            ></Paragraph>
                        </div>
                        <div className={styles.paragraphUtulok}>
                            <Paragraph
                                text = "Najviac mi záleží na útulku"
                                paragraphType = {ParagraphTypes.LabelForm}
                            ></Paragraph>
                            <Paragraph
                                text= {utulokData.name}
                                paragraphType = {ParagraphTypes.LabelData}
                            ></Paragraph>
                        </div>

                        <div className={styles.paragraphSuma}>
                            <Paragraph
                                text = "Suma ktorou chcem pomôcť"
                                paragraphType = {ParagraphTypes.LabelForm}
                            ></Paragraph>
                            <Paragraph
                                text= {sumData.value + "€"}
                                paragraphType = {ParagraphTypes.LabelData}
                            ></Paragraph>
                        </div>

                        <div className={styles.paragraphName}>
                            <Paragraph
                                text = "Meno a priezvisko"
                                paragraphType = {ParagraphTypes.LabelForm}
                            ></Paragraph>
                            <Paragraph
                                text= {personalData.name + " " + personalData.surName}
                                paragraphType = {ParagraphTypes.LabelData}
                            ></Paragraph>
                        </div>

                        <div className={styles.paragraphEmail}>
                            <Paragraph
                                text = "E-mailová adresa"
                                paragraphType = {ParagraphTypes.LabelForm}
                            ></Paragraph>
                            <Paragraph
                                text= {personalData.email}
                                paragraphType = {ParagraphTypes.LabelData}
                            ></Paragraph>
                        </div>

                        <div className={styles.paragrapghPhone}>
                            <Paragraph
                                text = "Telefónne číslo"
                                paragraphType = {ParagraphTypes.LabelForm}
                            ></Paragraph>
                            <Paragraph
                                text= {personalData.phoneNumber}
                                paragraphType = {ParagraphTypes.LabelData}
                            ></Paragraph>
                        </div>

                    </div>
                </div>

                <div className={styles.checkboxContainer}>
                    <input 
                        type="checkbox"
                    />        
                    <Paragraph
                        text="Súhlasím so spracovaním mojich osobných údajov"
                        paragraphType = {ParagraphTypes.CheckBox}
                    ></Paragraph>        
                </div>

                <div className={styles.imageContainer}>
                    <img src={GoodDogo} alt="GoodDogo"/>
                </div>

                <div className={styles.buttonBack}>
                    <NavLink 
                        to = "/PersonalInfo"
                    >
                        <Button
                            text="Späť"
                            buttonType={ButtonTypes.Left}
                        ></Button>
                    </NavLink>
                </div>

                <div className={styles.buttonNext}>
                    <Button
                    text="Odoslať formulár"
                    buttonType={ButtonTypes.Right}
                    ></Button>
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

export default View3

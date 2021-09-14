import styles from "./View3.module.scss"

import GoodDogo from "../Assets/GoodDogo.png"

import Header from "../Components/Parts/Header"
import Footer from "../Components/Parts/Footer"
import Button from "../Components/Inputs/Button"
import Paragraph from "../Components/Parts/Paragraph"

import { ButtonTypes, ParagraphTypes } from "../Types/types"

function View3() {
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
                                text= "Mestský útulok, Žilina"
                                paragraphType = {ParagraphTypes.LabelData}
                            ></Paragraph>
                        </div>

                        <div className={styles.paragraphSuma}>
                            <Paragraph
                                text = "Suma ktorou chcem pomôcť"
                                paragraphType = {ParagraphTypes.LabelForm}
                            ></Paragraph>
                            <Paragraph
                                text= "50 €"
                                paragraphType = {ParagraphTypes.LabelData}
                            ></Paragraph>
                        </div>

                        <div className={styles.paragraphName}>
                            <Paragraph
                                text = "Meno a priezvisko"
                                paragraphType = {ParagraphTypes.LabelForm}
                            ></Paragraph>
                            <Paragraph
                                text= "Peter Reguli"
                                paragraphType = {ParagraphTypes.LabelData}
                            ></Paragraph>
                        </div>

                        <div className={styles.paragraphEmail}>
                            <Paragraph
                                text = "E-mailová adresa"
                                paragraphType = {ParagraphTypes.LabelForm}
                            ></Paragraph>
                            <Paragraph
                                text= "peter.reguli@goodrequest.com"
                                paragraphType = {ParagraphTypes.LabelData}
                            ></Paragraph>
                        </div>

                        <div className={styles.paragrapghPhone}>
                            <Paragraph
                                text = "Telefónne číslo"
                                paragraphType = {ParagraphTypes.LabelForm}
                            ></Paragraph>
                            <Paragraph
                                text= "+421 902 237 207"
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
                    <Button
                    text="Späť"
                    buttonType={ButtonTypes.Left}
                    ></Button>
                </div>

                <div className={styles.buttonNext}>
                    <Button
                    text="Odoslať formulár"
                    buttonType={ButtonTypes.Right}
                    ></Button>
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

export default View3

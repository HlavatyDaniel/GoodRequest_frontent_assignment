import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../state/reducers"

import Header from "../Components/Parts/Header"
import Footer from "../Components/Parts/Footer"
import Button from "../Components/Inputs/Button"
import Paragraph from "../Components/Parts/Paragraph"
import Links from "../Components/Parts/Links"
import { ButtonTypes, ParagraphTypes, InputOption, PersonalInformationData, UtulokOption, ViewParagraph, RectangleType} from "../Types/types"

import GoodDogoResized from "../Assets/GoodDogoResized.png"

import styles from "./View3.module.scss"

const View3: React.FC = () => {

    const sumData : InputOption = useSelector((state : RootState) => state.sumData)
    const utulokData : UtulokOption = useSelector((state : RootState) => state.utulokData)
    const personalData : PersonalInformationData = useSelector((state : RootState) => state.personalData)
    const rectangleData : RectangleType = useSelector((state : RootState) => state.rectangleData)

    let nadaciaText : string = ""
    if (rectangleData === RectangleType.CONRETE)
        nadaciaText = "Chcem finančne prispieť konkrétnemu útulku"
    else if (rectangleData === RectangleType.GENERAL)
        nadaciaText = "Chcem finančne prispieť celej nadácii"

    const paragraphOptions : ViewParagraph[] = [
        {divClass: styles.paragraphForm, firstText: "Akou formou chcem pomôcť",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: nadaciaText,
        secondParagraphType: ParagraphTypes.LABELDATA},
        {divClass: styles.paragraphUtulok, firstText: "Najviac mi záleží na útulku",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: utulokData.name,
        secondParagraphType: ParagraphTypes.LABELDATA},
        {divClass: styles.paragraphSuma, firstText: "Suma ktorou chcem pomôcť",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: sumData.value + "€",
        secondParagraphType: ParagraphTypes.LABELDATA},
        {divClass: styles.paragraphName, firstText: "Meno a priezvisko",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: personalData.name + " " + personalData.surName,
        secondParagraphType: ParagraphTypes.LABELDATA},
        {divClass: styles.paragraphEmail, firstText: "E-mailová adresa",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: personalData.email,
        secondParagraphType: ParagraphTypes.LABELDATA},
        {divClass: styles.paragrapghPhone, firstText: "Telefónne číslo",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: personalData.phoneNumber,
        secondParagraphType: ParagraphTypes.LABELDATA}
    ]

    return (
        <div>
            <div className={styles.container}>

                <div className={styles.links}>
                    <Links/>
                </div>  

                <div className={styles.header}>
                    <Header viewName='Skontrolujte si zadané údaje'/>
                </div>

                <div className={styles.paragraphContainer}>
                    <div className={styles.paragraphGrid}>

                        {
                        paragraphOptions.map(paragraphOption => (
                            <div className={paragraphOption.divClass}>
                                <Paragraph
                                    text = {paragraphOption.firstText}
                                    paragraphType = {paragraphOption.firstParagraphType}
                                ></Paragraph>
                                <Paragraph
                                    text = {paragraphOption.secondText}
                                    paragraphType = {paragraphOption.secondParagraphType}
                                ></Paragraph>
                            </div>
                            ))
                        }

                        <div className={styles.checkboxContainer}>
                            <input 
                                type="checkbox"
                            />        
                            <Paragraph
                                text="Súhlasím so spracovaním mojich osobných údajov"
                                paragraphType = {ParagraphTypes.CHECKBOX}
                            ></Paragraph>        
                        </div>

                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <img src={GoodDogoResized} alt="GoodDogo"/>
                </div>

                <div className={styles.buttonBack}>
                    <NavLink 
                        to = "/PersonalInfo"
                    >
                        <Button
                            text="Späť"
                            buttonType={ButtonTypes.LEFT}
                        ></Button>
                    </NavLink>
                </div>

                <div className={styles.buttonNext}>
                    <Button
                    text="Odoslať formulár"
                    buttonType={ButtonTypes.RIGHT}
                    ></Button>
                </div>

            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default View3

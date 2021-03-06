import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../state/reducers"
import { bindActionCreators } from "redux"
import { setCheckbox } from "../state/action-creators/actionCreators"

import axios from "axios"

import Header from "../Components/Parts/Header"
import Footer from "../Components/Parts/Footer"
import Button from "../Components/Inputs/Button"
import Paragraph from "../Components/Parts/Paragraph"
import Links from "../Components/Parts/Links"
import CheckBox from "../Components/Inputs/CheckBox"
import { PostData, ButtonTypes, ParagraphTypes, SumOption, PersonalInformationData, ShelterOption, ViewParagraph, RectangleType} from "../Types/types"

import GoodDogoResized from "../Assets/GoodDogoResized.png"

import styles from "./View3.module.scss"

const View3: React.FC = () => {

    const dispatchPick = useDispatch();
    const actionPickCreator = bindActionCreators(setCheckbox, dispatchPick) 
    const sumData : SumOption = useSelector((state : RootState) => state.sumData)
    const shelterData : ShelterOption = useSelector((state : RootState) => state.shelterData)
    const personalData : PersonalInformationData = useSelector((state : RootState) => state.personalData)
    const rectangleData : RectangleType = useSelector((state : RootState) => state.rectangleData)
    const checkBoxData : boolean = useSelector((state : RootState) => state.checkBoxData)

    let nadaciaText : string = ""
    if (rectangleData === RectangleType.CONRETE)
        nadaciaText = "Chcem finančne prispieť konkrétnemu útulku"
    else if (rectangleData === RectangleType.GENERAL)
        nadaciaText = "Chcem finančne prispieť celej nadácii"

    const paragraphOptions : ViewParagraph[] = [
        {divClass: styles.paragraphForm, firstText: "Akou formou chcem pomôcť",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: nadaciaText,
        secondParagraphType: ParagraphTypes.LABELDATA, key: 1},
        {divClass: styles.paragraphShelter, firstText: "Najviac mi záleží na útulku",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: shelterData.name,
        secondParagraphType: ParagraphTypes.LABELDATA, key: 2},
        {divClass: styles.paragraphSuma, firstText: "Suma ktorou chcem pomôcť",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: sumData.value + "€",
        secondParagraphType: ParagraphTypes.LABELDATA, key: 3},
        {divClass: styles.paragraphName, firstText: "Meno a priezvisko",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: personalData.name + " " + personalData.surName,
        secondParagraphType: ParagraphTypes.LABELDATA, key: 4},
        {divClass: styles.paragraphEmail, firstText: "E-mailová adresa",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: personalData.email,
        secondParagraphType: ParagraphTypes.LABELDATA, key: 5},
        {divClass: styles.paragrapghPhone, firstText: "Telefónne číslo",
        firstParagraphType: ParagraphTypes.LABELFORM, secondText: personalData.phoneNumber,
        secondParagraphType: ParagraphTypes.LABELDATA, key: 6}
    ]

    const [responseText, setResponseText] = useState<string>('')

    useEffect(() => {
        const unsetCheckbox = () => {
            actionPickCreator(false)
        }

        unsetCheckbox()
        // According to react docs this is fine.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handlePost = () => {
        
        let postData : PostData = {firstName: "", lastName: "", email: "", value: ""}
        postData.firstName = personalData.name
        postData.lastName = personalData.surName
        postData.email = personalData.email
        postData.value = sumData.value.toString()
        let phoneNumber : string = "0" + personalData.phoneNumber.substr(4)
        postData.phone = phoneNumber
        if (shelterData.id !== 0)
            postData.shelterId = shelterData.id

        console.log(postData);

        axios.post('https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute', postData)
            .then(response => {
                if (response.status === 200)
                    setResponseText("      Odoslané      ")
                else
                    setResponseText("Something went wrong")
            }).catch(error => {
                setResponseText("Something went wrong")
            })
    }

    return (
        <div>
            <div className={styles.container}>

                <div className={styles.links}>
                    <Links/>
                </div>  

                <div className={styles.progressContainer}>
                    <div className={styles.emptyRectangle}></div>
                    <div className={styles.emptyRectangle}></div>
                    <div className={styles.filledRectangle}></div>
                </div>

                <div className={styles.header}>
                    <Header viewName='Skontrolujte si zadané údaje'/>
                </div>

                <div className={styles.paragraphContainer}>
                    <div className={styles.paragraphGrid}>

                        {
                        paragraphOptions.map(paragraphOption => (
                            <div className={paragraphOption.divClass} key={paragraphOption.key+20}>
                                <Paragraph
                                    text = {paragraphOption.firstText}
                                    paragraphType = {paragraphOption.firstParagraphType}
                                    key={paragraphOption.key}
                                ></Paragraph>
                                <Paragraph
                                    text = {paragraphOption.secondText}
                                    paragraphType = {paragraphOption.secondParagraphType}
                                    key={paragraphOption.key + 10}
                                ></Paragraph>
                            </div>
                            ))
                        }

                        <div className={styles.checkboxContainer}>
                            <CheckBox/>
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
            
                <div className={styles.center}>
                    <p className={styles.postResponse}>{responseText}</p>
                </div>

                <div className={styles.buttonNext}>
                {
                    checkBoxData
                    ?   <Button
                            text = "Odoslať formulár"
                            buttonType = {ButtonTypes.RIGHTACTIVE}
                            onClick = {handlePost}
                        />
                    :   <Button
                            text = "Odoslať formulár"
                            buttonType = {ButtonTypes.RIGHTINACTIVE}
                        />
                }
                </div>

            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default View3

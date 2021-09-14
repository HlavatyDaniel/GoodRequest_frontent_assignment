import styles from "./View1.module.scss"

import GoodDogo from "../Assets/GoodDogo.png"

import Header from "../Components/Parts/Header"
import RectangleLeft from "../Components/Inputs/RectangleLeft"
import RectangleRight from "../Components/Inputs/RectangleRight"
import MySelect from "../Components/Inputs/MySelect"
import Button from "../Components/Inputs/Button"
import Footer from "../Components/Parts/Footer"
import Input from "../Components/Inputs/Input"
import Paragraph from "../Components/Parts/Paragraph"
import {ParagraphTypes, ButtonTypes} from "../Types/types"

function View1() {
    return (
        <div>
            <div className={styles.container}>

                <div className={styles.header}>
                    <Header viewName='Vyberte si možnosť, ako chcete pomôcť'/>
                </div>

                <div className={styles.rectangleContainer}>
                    <RectangleLeft 
                        text="Chcem finančne prispieť konkrétnemu útulku"
                    />
                    <RectangleRight 
                        text="Chcem finančne prispieť celej nadácii"
                    />
                </div>

                <div className={styles.inputUtulok}>
                    <MySelect/>
                </div>

                <div className={styles.inputSumaContainer}>

                    <Paragraph
                        text = "Suma, ktorou chcem prispieť"
                        paragraphType = {ParagraphTypes.LabelMain}
                    ></Paragraph>

                    <div>
                        <Input description='5€'/>
                        <Input description='10€'/>
                        <Input description='20€'/>
                        <Input description='30€'/>
                        <Input description='50€'/>
                        <Input description='100€'/>
                        <Input description='...€'/>
                    </div>
                </div>

                <div className={styles.buttonWrapper}>
                    <Button
                    text = "Pokračovať"
                    buttonType = {ButtonTypes.Right}
                    />
                </div>

                <div className={styles.imageContainer}>
                    <img src={GoodDogo} alt="GoodDogo"/>
                </div>
            </div>

            <div>
                <hr className={styles.line}/>
                <Footer/>
            </div>
        </div>
    )
}

export default View1
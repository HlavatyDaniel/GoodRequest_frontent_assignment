import styles from "./App.module.scss"

//import {Select} from '@material-ui/core';

import GoodDogo from "./Assets/GoodDogo.png"

import Header from "./Components/Header"
import RectangleLeft from "./Components/RectangleLeft"
import RectangleRight from "./Components/RectangleRight"
import MySelect from "./Components/MySelect"
import Button from "./Components/Button"
import Footer from "./Components/Footer"
import Input from "./Components/Input"
import Paragraph from "./Components/Paragraph"
import {ParagraphTypes} from "./Types/types"

function App() {
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
                    <Button/>
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

export default App
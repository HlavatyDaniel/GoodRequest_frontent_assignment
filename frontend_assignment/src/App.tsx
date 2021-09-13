import styles from "./App.module.scss"

//import {Select} from '@material-ui/core';

import GoodDogo from "./Assets/GoodDogo.png"

import Header from "./Components/Header"
import Rectangle from "./Components/Rectangle"
import Select from "./Components/Select"
import Button from "./Components/Button"
import Footer from "./Components/Footer"
import Input from "./Components/Input"

function App() {
    return (
        <div>
            <div className={styles.container}>

                <div className={styles.header}>
                    <Header viewName='Vyberte si možnosť, ako chcete pomôcť'/>
                </div>

                <div className={styles.rectangleContainer}>
                    <Rectangle rectangleType={1} />
                    <Rectangle rectangleType={2} />
                </div>

                <div className={styles.inputUtulok}>
                    <Select/>
                </div>

                <div className={styles.inputSuma}>
                    <Input description='5€'/>
                    <Input description='10€'/>
                    <Input description='20€'/>
                    <Input description='30€'/>
                    <Input description='50€'/>
                    <Input description='100€'/>
                    <Input description='...€'/> {/* TO DO*/}
                </div>

                <div className={styles.buttonWrapper}>
                    <Button/>
                </div>

                <div className={styles.imageContainer}>
                    <img src={GoodDogo} alt="GoodDogo"/>
                </div>

                <div className={styles.footer}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default App
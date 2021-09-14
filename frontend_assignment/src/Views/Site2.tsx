import styles from "./Site2.module.scss"

import GoodDogo from "../Assets/GoodDogo.png"

import Header from "../Components/Parts/Header"
import Footer from "../Components/Parts/Footer"

function Site2() {
    return (
        <div>
            <div className={styles.container}>

                <div className={styles.header}>
                    <Header viewName='Potrebujeme od Vás zopár informácií'/>
                </div>

                <div className={styles.inputsContainer}>
                    <p>Blabli</p>
                </div>

                <div className={styles.buttonsContainer}>
                    <p>Blabli</p>
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

export default Site2
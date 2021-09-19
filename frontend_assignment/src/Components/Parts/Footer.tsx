import React from 'react'

import Paragraph  from './Paragraph'

import GoodBoyLogo from "../../Assets/GoodBoyLogo.png"

import styles from "./Footer.module.scss"
import { ParagraphTypes } from "../../Types/types"

const Footer: React.FC = () => {

    return (

        <div>
            <hr className={styles.line}/> 
            <footer className={styles.container}> 
                <div className={styles.logo}>
                    <img src={GoodBoyLogo} alt="Good Boy" className={styles.goodBoy}/>
                </div>

                <div className={styles.infoContainer}>
                    <Paragraph
                        text="Nadácia Good Boy"
                        paragraphType= {ParagraphTypes.FOOTERTITLE}
                    ></Paragraph>
                    <Paragraph
                        text="O projekte Ako na to Kontakt"
                        paragraphType= {ParagraphTypes.FOOTERABOUT}
                    ></Paragraph>
                </div>

                <div className={styles.infoContainer2}>
                    <Paragraph
                        text="Nadácia Good Boy"
                        paragraphType= {ParagraphTypes.FOOTERTITLE}
                    ></Paragraph>
                    <Paragraph
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet."
                        paragraphType= {ParagraphTypes.FOOTERNOTE}
                    ></Paragraph>
                </div>

                <div className={styles.infoContainer3}>
                    <Paragraph
                        text="Nadácia Good Boy"
                        paragraphType= {ParagraphTypes.FOOTERTITLE}
                    ></Paragraph>
                    <Paragraph
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet."
                        paragraphType= {ParagraphTypes.FOOTERNOTE}
                    ></Paragraph>
                </div>
            </footer>
        </div>

    )
}

export default Footer
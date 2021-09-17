import React from 'react'

import Paragraph  from './Paragraph'

import GoodBoy from "../../Assets/GoodBoyLogo.png"

import styles from "./Footer.module.scss"
import { ParagraphTypes } from "../../Types/types"

const Footer: React.FC = () => {

    return (
        <footer className={styles.container}> 
            <div className={styles.logo}>
                <img src={GoodBoy} alt="Good Boy" className={styles.goodBoy}/>
                <Paragraph
                    text="Good boy"
                    paragraphType= {ParagraphTypes.FOOTERLOGO}
                ></Paragraph>
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
    )
}

export default Footer
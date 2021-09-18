import FacebookLogoMini from "../../Assets/FacebookLogoMini.png"
import InstagramLogoMini from "../../Assets/InstagramLogoMini.png"
import Paragraph from "./Paragraph"
import { ParagraphTypes } from "../../Types/types"

import styles from "./Links.module.scss"

const Links: React.FC = () => {

    const handleFacebookRedirect = () => {
        window.open("https://www.facebook.com/GoodRequestCom");
    }

    const handleInstagramRedirect = () => {
        window.open("https://www.instagram.com/goodrequest/");
    }

    return (
        <div>
            <div className={styles.container}>

                <Paragraph
                    text="Nadácia Good Boy"
                    paragraphType={ParagraphTypes.LINKS}
                ></Paragraph>

                <div className={styles.links}>

                    <img 
                        className={styles.fbLogo} 
                        src={FacebookLogoMini} 
                        alt="FacebookLogo"
                        onClick={handleFacebookRedirect}
                    />

                    <img 
                        className={styles.instagramLogo} 
                        src={InstagramLogoMini} 
                        alt="InstagramLogo"
                        onClick={handleInstagramRedirect}
                    />

                </div>

            </div>

            <hr
                className={styles.line}
            />
        </div>
    )
}

export default Links



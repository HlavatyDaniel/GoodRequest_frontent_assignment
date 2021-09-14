import React from 'react'

import styles from "./Button.module.scss"

const Button: React.FC = () => {
    return (
        <button
        className={styles.buttonNext} 
    >
        Pokračovať
    </button>
    )
}

export default Button
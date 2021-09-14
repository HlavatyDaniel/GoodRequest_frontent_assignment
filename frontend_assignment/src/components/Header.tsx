import React from 'react'
import styles from "./Header.module.scss"

interface Props {
    viewName: string
}

const Header: React.FC<Props> = (props) => {
    
    const {viewName} = props

    return (
        <header className={styles.header}>
            {viewName}
        </header>
    )
}

export default Header


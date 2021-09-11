import React from 'react'

import {NavLink} from "react-router-dom"

import styles from './TheNavigation.module.scss'

const TheNavigation: React.FC = () => {
    return (
        <div>
            <nav className={styles.navigation}>
                <NavLink to="/" activeClassName={styles.active} exact>
                    Welcome
                </NavLink>
                <NavLink to="/form" activeClassName={styles.active}>
                    Form
                </NavLink>
                <NavLink to="/about" activeClassName={styles.active}>
                    About
                </NavLink>
            </nav>
        </div>
    )
}

export default TheNavigation
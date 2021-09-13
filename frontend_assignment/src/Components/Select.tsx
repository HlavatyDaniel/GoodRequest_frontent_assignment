import React from 'react'

import styles from "./Select.module.scss"

const Select: React.FC = () => {
    return (
        <label>
        O Projekte
        <select
            className={styles.selectUtulok}>
                
                <option>
                    First option
                </option>
                <option>
                    Second option
                </option>
        </select>
    </label>
    )
}

export default Select
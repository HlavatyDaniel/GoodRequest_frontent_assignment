import React from 'react'

import styles from "./Rectangle.module.scss"

//TO DO, type to enum

interface Props {
    rectangleType: number
}

const Rectangle: React.FC<Props> = (props) => {

    //TO DO this this not look cool.
    const {rectangleType} = props

    var className = '';
    if (rectangleType === 1)
        className = styles.rectangleConcrete;
    else if (rectangleType === 2)
        className = styles.rectangleGeneral;
    
    return (
        <div className={className}>
        </div>
    )
}

export default Rectangle
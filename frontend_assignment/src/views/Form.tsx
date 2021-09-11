import React, {useEffect} from 'react'

import Header from "../components/Header"

const Form: React.FC = () => {

    useEffect(() => {
        document.title = "Form";
    })

    return (
        <div>
            <Header viewName={"Form"} />
        </div>
    )
}

export default Form
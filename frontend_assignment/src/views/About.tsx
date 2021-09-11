import React, {useEffect} from 'react'

import Header from "../components/Header"

const About: React.FC = () => {
    useEffect(() => {
        document.title = "About"
    });

    return (
        <div>
            <Header viewName={"About"} />
        </div>
    )
}

export default About
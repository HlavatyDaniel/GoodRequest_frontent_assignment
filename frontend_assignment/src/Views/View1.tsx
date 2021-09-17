import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"
import { RootState } from "../state/reducers"

import Header from "../Components/Parts/Header"
import RectangleLeft from "../Components/Inputs/RectangleLeft"
import RectangleRight from "../Components/Inputs/RectangleRight"
import Select from "../Components/Inputs/Select"
import Button from "../Components/Inputs/Button"
import Footer from "../Components/Parts/Footer"
import Input from "../Components/Inputs/Input"
import Paragraph from "../Components/Parts/Paragraph"
import {ParagraphTypes, ButtonTypes, UtulokOption, InputOption} from "../Types/types"

import GoodDogo from "../Assets/GoodDogo.png"

import styles from "./View1.module.scss"

const View1: React.FC = () => {

    const [utulokOptions, setUtulokOptions] = useState<UtulokOption[]>([])

    const pickedInput : InputOption = useSelector((state : RootState) => state.sumData)

    const inputOptions : InputOption[] = [
        {id : 1, value: 5}, 
        {id : 2, value: 10},
        {id : 3, value: 20},
        {id : 4, value: 30},
        {id : 5, value: 50},
        {id : 6, value: 100}]

    const todoOption : InputOption = {id:  7, value: 0}

    useEffect(() => {
        const fetchUtulky = () => {
            axios.get('https://frontend-assignment-api.goodrequest.com/api/v1/shelters')
                .then(response => {
                    let newUtulokOptions : UtulokOption[] = [];
                    Object.keys(response.data.shelters).forEach(function(key) {
                        const newUtulokOption : UtulokOption = {
                            id: response.data.shelters[key].id,
                            name: response.data.shelters[key].name
                        };
                        newUtulokOptions.push(newUtulokOption);
                    })

                    setUtulokOptions(newUtulokOptions)
                }).catch(ignore => {
                    console.log("not sure what should i do here, what is standard behavior")
                })
        };

        fetchUtulky()
    },[]);


    return (
        <div>
            <div className={styles.container}>

                <div className={styles.header}>
                    <Header viewName='Vyberte si možnosť, ako chcete pomôcť'/>
                </div>

                <div className={styles.rectangleContainer}>
                    <RectangleLeft 
                        text="Chcem finančne prispieť konkrétnemu útulku"
                    />
                    <RectangleRight 
                        text="Chcem finančne prispieť celej nadácii"
                    />
                </div>

                <div className={styles.inputUtulok}>
                    <Select
                        utulokOptions = {utulokOptions}
                    />
                </div>

                <div className={styles.inputSumaContainer}>

                    <Paragraph
                        text = "Suma, ktorou chcem prispieť"
                        paragraphType = {ParagraphTypes.LABELMAIN}
                    ></Paragraph>

                    <div>
                        {
                        inputOptions.map(inputOption => (
                            pickedInput.value === inputOption.value 
                            ?   <Input 
                                    inputOption={inputOption}
                                    className={styles.inputAmountActive}
                                />
                            :   <Input
                                    inputOption={inputOption}
                                    className={styles.inputAmount}
                                />
                            ))
                        }
                        <Input 
                            inputOption={todoOption}
                            className={styles.inputAmount}
                        />
                    </div>
                </div>

                <div className={styles.buttonWrapper}>

                    <NavLink 
                        to = "/PersonalInfo"
                    >
                        <Button
                            text = "Pokračovať"
                            buttonType = {ButtonTypes.RIGHT}
                        />
                    </NavLink>

                </div>

                <div className={styles.imageContainer}>
                    <img src={GoodDogo} alt="GoodDogo"/>
                </div>

            </div>

            <div>
                <hr/>
                <Footer/>
            </div>
        </div>
    )
}

export default View1
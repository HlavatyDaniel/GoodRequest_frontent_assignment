import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../state/reducers"
import axios from "axios"

import Header from "../Components/Parts/Header"
import Rectangle from "../Components/Inputs/Rectangle"
import Select from "../Components/Inputs/Select"
import Button from "../Components/Inputs/Button"
import Footer from "../Components/Parts/Footer"
import Input from "../Components/Inputs/Input"
import InputCustomSum from "../Components/Inputs/InputCustomSum"
import Paragraph from "../Components/Parts/Paragraph"
import { ParagraphTypes, ButtonTypes, ShelterOption, SumOption, RectangleType } from "../Types/types"

import GoodDogoResized from "../Assets/GoodDogoResized.png"

import styles from "./View1.module.scss"

const View1: React.FC = () => {

    const [shelterOptions, setShelterOptions] = useState<ShelterOption[]>([])

    const sumData : SumOption = useSelector((state : RootState) => state.sumData)
    const rectangleData : RectangleType = useSelector((state : RootState) => state.rectangleData)
    const shelterData : ShelterOption = useSelector((state : RootState) => state.shelterData)

    const sumOptions : SumOption[] = [
        {id : 1, value: 5}, 
        {id : 2, value: 10},
        {id : 3, value: 20},
        {id : 4, value: 30},
        {id : 5, value: 50},
        {id : 6, value: 100}]

    useEffect(() => {
        const fetchShelters = () => {
            axios.get('https://frontend-assignment-api.goodrequest.com/api/v1/shelters')
                .then(response => {
                    let newShelterOptions : ShelterOption[] = [];
                    Object.keys(response.data.shelters).forEach(function(key) {
                        const newShelterOption : ShelterOption = {
                            id: response.data.shelters[key].id,
                            name: response.data.shelters[key].name
                        };
                        newShelterOptions.push(newShelterOption);
                    })

                    setShelterOptions(newShelterOptions)
                }).catch(ignore => {
                    console.log("not sure what should i do here, what is standard behavior")
                })
        };

        fetchShelters()
    },[]);

    const checkData = () => {
        if (sumData.value !== 0)
        {
            if (rectangleData === RectangleType.CONRETE && shelterData.id !== 0)
                return true;
            else if (rectangleData === RectangleType.GENERAL)
                return true;
        }
        return false;
    }

    return (
        <div>
            <div className={styles.container}>

                <div className={styles.progressContainer}>
                    <div className={styles.filledRectangle}></div>
                    <div className={styles.emptyRectangle}></div>
                    <div className={styles.emptyRectangle}></div>
                </div>

                <div className={styles.header}>                    
                    <Header viewName='Vyberte si možnosť, ako chcete pomôcť'/>

                </div>

                <div className={styles.rectangleContainer}>
                    <Rectangle
                        type={RectangleType.CONRETE}
                        active={rectangleData === RectangleType.CONRETE ? true : false}
                    ></Rectangle>

                    <Rectangle
                        type={RectangleType.GENERAL}
                        active={rectangleData === RectangleType.GENERAL ? true : false}
                    ></Rectangle>

                </div>

                <div className={styles.inputShelter}>
                    <Select
                        shelterOptions = {shelterOptions}
                    />
                </div>

                <div className={styles.inputSumaContainer}>

                    <Paragraph
                        text = "Suma, ktorou chcem prispieť"
                        paragraphType = {ParagraphTypes.LABELMAIN}
                    ></Paragraph>

                    <div>
                        {
                        sumOptions.map(sumOption => (
                            sumData.value === sumOption.value 
                            ?   <Input 
                                    sumOption={sumOption}
                                    active={true}
                                    key={sumOption.id}
                                />
                            :   <Input
                                    sumOption={sumOption}
                                    active={false}
                                    key={sumOption.id}
                                />
                            ))
                        }
                        {
                        sumData.id === 7 
                        ?   <InputCustomSum
                                id = {7}
                                active={true}
                            />
                        :   <InputCustomSum
                                id = {7}
                                active={false}
                            />
                        }
                    </div>
                </div>

                <div className={styles.buttonWrapper}>
                    {
                        checkData() 
                        ?   <NavLink 
                                to = "/PersonalInfo"
                            >
                            <Button
                                text = "Pokračovať"
                                buttonType = {ButtonTypes.RIGHTACTIVE}
                            />
                            </NavLink>
                        :   <Button
                                text = "Pokračovať"
                                buttonType = {ButtonTypes.RIGHTINACTIVE}
                            />
                    }
                </div>

                <div className={styles.imageContainer}>
                    <img src={GoodDogoResized} alt="GoodDogo"/>
                </div>

            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default View1
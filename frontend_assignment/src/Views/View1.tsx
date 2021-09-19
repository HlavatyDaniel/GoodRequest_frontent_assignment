import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"
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
import {ParagraphTypes, ButtonTypes, UtulokOption, InputOption, RectangleType} from "../Types/types"

import GoodDogoResized from "../Assets/GoodDogoResized.png"

import styles from "./View1.module.scss"

const View1: React.FC = () => {

    const [utulokOptions, setUtulokOptions] = useState<UtulokOption[]>([])

    const pickedInput : InputOption = useSelector((state : RootState) => state.sumData)
    const pickedRectangle : RectangleType = useSelector((state : RootState) => state.rectangleData)
    const pickedOption : UtulokOption = useSelector((state : RootState) => state.utulokData)

    const inputOptions : InputOption[] = [
        {id : 1, value: 5}, 
        {id : 2, value: 10},
        {id : 3, value: 20},
        {id : 4, value: 30},
        {id : 5, value: 50},
        {id : 6, value: 100}]

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

    const checkData = () => {
        if (pickedInput.value !== 0)
        {
            if (pickedRectangle === RectangleType.CONRETE && pickedOption.id !== 0)
                return true;
            else if (pickedRectangle === RectangleType.GENERAL)
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
                        active={pickedRectangle === RectangleType.CONRETE ? true : false}
                    ></Rectangle>

                    <Rectangle
                        type={RectangleType.GENERAL}
                        active={pickedRectangle === RectangleType.GENERAL ? true : false}
                    ></Rectangle>

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
                                    className={styles.inputAmountInactive}
                                />
                            ))
                        }
                        {
                        pickedInput.id === 7 
                        ?   <InputCustomSum
                                id = {7}
                                classNameDiv={styles.inputCustomSumDivActive}
                                classNameInput={styles.inputCustomSumActive}
                                classNameEuroSign={styles.inputEuroSignActive}
                            />
                        :   <InputCustomSum
                                id = {7}
                                classNameDiv={styles.inputCustomDivInactive}
                                classNameInput={styles.inputCustomSumInactive}
                                classNameEuroSign={styles.inputEuroSignInactive}

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
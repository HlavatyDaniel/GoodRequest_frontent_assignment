import styles from "./View1.module.scss"

import React, {useState, useEffect} from "react"

import GoodDogo from "../Assets/GoodDogo.png"

import Header from "../Components/Parts/Header"
import RectangleLeft from "../Components/Inputs/RectangleLeft"
import RectangleRight from "../Components/Inputs/RectangleRight"
import Select from "../Components/Inputs/Select"
import Button from "../Components/Inputs/Button"
import Footer from "../Components/Parts/Footer"
import Input from "../Components/Inputs/Input"
import Paragraph from "../Components/Parts/Paragraph"
import {ParagraphTypes, ButtonTypes, UtulokOption, InputOption} from "../Types/types"

import {NavLink} from "react-router-dom"
import axios from "axios"

import { useSelector } from "react-redux"
import { RootState } from "../state/reducers"

const View1: React.FC = () => {

    const [utulokOptions, setUtulokOptions] = useState<UtulokOption[]>([])

    const pickedInput : InputOption = useSelector((state : RootState) => state.sumData)

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
                        paragraphType = {ParagraphTypes.LabelMain}
                    ></Paragraph>

                    <div>
                            {pickedInput.value === 5 
                            ?   <Input inputId={1} value={5} className={styles.inputAmountActive} 
                                />
                            :   <Input inputId={1} value={5} className={styles.inputAmount} 
                                />
                            }

                            {pickedInput.value === 10 
                            ?   <Input inputId={2} value={10} className={styles.inputAmountActive} 
                                />
                            :   <Input inputId={2} value={10} className={styles.inputAmount} 
                                />
                            }

                            {pickedInput.value === 20 
                            ?   <Input inputId={3} value={20} className={styles.inputAmountActive} 
                                />
                            :   <Input inputId={3} value={20} className={styles.inputAmount} 
                                />
                            }

                            {pickedInput.value === 30 
                            ?   <Input inputId={4} value={30} className={styles.inputAmountActive} 
                                />
                            :   <Input inputId={4} value={30} className={styles.inputAmount} 
                                />
                            }

                            {pickedInput.value === 50 
                            ?   <Input inputId={5} value={50} className={styles.inputAmountActive} 
                                />
                            :   <Input inputId={5} value={50} className={styles.inputAmount} 
                                />
                            }

                            {pickedInput.value === 100 
                            ?   <Input inputId={6} value={100} className={styles.inputAmountActive}
                                />
                            :   <Input inputId={6} value={100} className={styles.inputAmount} 
                                />
                            }
                            
                        <Input inputId={7} value={0} 
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
                            buttonType = {ButtonTypes.Right}
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
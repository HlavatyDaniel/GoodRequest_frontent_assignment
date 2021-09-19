import React, {useState, useRef, useEffect} from 'react'

import Paragraph from '../Parts/Paragraph'
import { ParagraphTypes, RectangleType, ShelterOption } from '../../Types/types'

import styles from "./Select.module.scss"

import { useDispatch} from "react-redux"
import { bindActionCreators } from "redux"
import { setShelter } from "../../state/action-creators/actionCreators"

import { useSelector } from "react-redux"
import { RootState } from "../../state/reducers"

interface Props {
    shelterOptions: ShelterOption[] 
}

const Select: React.FC<Props> = (props) => {

    const {shelterOptions} = props

    const [labelsHidden, setLabelsHidden] = useState<boolean>(false)

    const selectShelterRef = useRef<HTMLSelectElement>(null)

    const dispatchPick = useDispatch();
    const actionPickCreator = bindActionCreators(setShelter, dispatchPick)
    const shelterData : ShelterOption = useSelector((state : RootState) => state.shelterData)
    const rectangleData : RectangleType = useSelector((state : RootState) => state.rectangleData)

    useEffect(() => {
        const setOption = () => {
            if (shelterData.id !== 0 && shelterData.name !== "")
            {
                if (selectShelterRef.current)
                {
                    var children = selectShelterRef.current.children;
                    for (var i = 0; i < children.length; i++)
                    {
                        if (children[i].innerHTML.toString() === shelterData.name)
                        {
                            selectShelterRef.current.value = shelterData.id + "|" + shelterData.name
                            setLabelsHidden(true)
                            break;
                        }
                    }
                }
            }
        };

        setOption()
    })

    const handleChange = () => {
        setLabelsHidden(true)

        if (selectShelterRef.current?.value)
        {
            var splits = selectShelterRef.current.value.split("|")
            var id : number
            var name : string

            if (splits[0])
                id = +splits[0];
            else return;

            if (splits[1])
                name = splits[1];
            else return;

            var shelter : ShelterOption = {
                id : id,
                name :  name
            }

            actionPickCreator(shelter);
        }
    }

    return (
        <div>

            <div className={styles.paragraphContainer}>

                <Paragraph
                    text="O Projekte"
                    paragraphType= {ParagraphTypes.LABELLEFT}
                ></Paragraph>
                {
                    rectangleData !== RectangleType.CONRETE &&
                    <Paragraph
                        text="Nepovinné"
                        paragraphType= {ParagraphTypes.LABELRIGHT}
                    ></Paragraph>
                }

            </div>

            <div className= {styles.selectContainer}>

                <label  
                    hidden={labelsHidden}
                    className={styles.typeLabel}
                >Útulok</label>

                <label  
                    hidden={labelsHidden} 
                    className={styles.optionsLabel}
                >Vyberte útulok zo zoznamu</label>

                <select
                    className={styles.selectShelter}
                    onChange={handleChange}
                    ref={selectShelterRef}
                >
                    <option disabled selected value="">
                    </option>
                    {
                    shelterOptions.map(shelter => (
                        <option value={shelter.id + "|" + shelter.name}>
                            {shelter.name} 
                        </option>
                    ))
                    }
                </select>
            </div>
        </div>
    )
}

export default Select
import React, {useState, useRef} from 'react'

import Paragraph from '../Parts/Paragraph'
import { ParagraphTypes, UtulokOption } from '../../Types/types'

import styles from "./Select.module.scss"

import { useDispatch} from "react-redux"
import { bindActionCreators } from "redux"
import { setUtulok } from "../../state/action-creators/actionCreators"

import { useSelector } from "react-redux"
import { RootState } from "../../state/reducers"

interface Props {
    utulokOptions: UtulokOption[] 
}

const MySelect: React.FC<Props> = (props) => {

    const {utulokOptions} = props

    const selectUtulokRef = useRef<HTMLSelectElement>(null)

    const dispatchPick = useDispatch();
    const actionPickCreator = bindActionCreators(setUtulok, dispatchPick)
    const pickedUtulok : UtulokOption = useSelector((state : RootState) => state.utulokData)


    const [labelsHidden, setLabelsHidden] = useState<boolean>(false)

    const handleChange = () => {
        setLabelsHidden(true)

        if (selectUtulokRef.current?.value)
        {
            var splits = selectUtulokRef.current.value.split("|")
            var id : number
            var name : string

            console.log(splits);

            if (splits[0])
                id = +splits[0];
            else return;

            if (splits[1])
                name = splits[1];
            else return;

            var utulok : UtulokOption = {
                id : id,
                name :  name
            }

            console.log(utulok)

            actionPickCreator(utulok);
            console.log(pickedUtulok.id + " " + pickedUtulok.name)
        }
    }

    return (
        <div>
            <div className={styles.paragraphContainer}>
                <Paragraph
                    text="O Projekte"
                    paragraphType= {ParagraphTypes.LabelLeft}
                ></Paragraph>
                <Paragraph
                    text="Nepovinné"
                    paragraphType= {ParagraphTypes.LabelRight}
                ></Paragraph>
            </div>
            <div className= {styles.selectContainer}>
                <label  hidden={labelsHidden} className={styles.typeLabel}>Útulok</label>
                <label  hidden={labelsHidden} className={styles.optionsLabel}>Vyberte útulok zo zoznamu</label>

                <select
                    className={styles.selectUtulok}
                    onChange={handleChange}
                    ref={selectUtulokRef}
                    >
                    <option disabled selected value="">
                    </option>
                    {utulokOptions.map(utulok => (
                        <option value={utulok.id + "|" + utulok.name}>
                            {utulok.name} 
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default MySelect
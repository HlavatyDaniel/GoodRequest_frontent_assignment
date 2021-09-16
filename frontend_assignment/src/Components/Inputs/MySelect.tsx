import React, {useState, useRef} from 'react'

import Paragraph from '../Parts/Paragraph'
import { ParagraphTypes, UtulokOption } from '../../Types/types'

import styles from "./Select.module.scss"

import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { setUtulokId } from "../../state/action-creators/actionCreators"
//import { RootState } from "../../state/reducers"

interface Props {
    utulokOptions: UtulokOption[] 
}

const MySelect: React.FC<Props> = (props) => {

    const {utulokOptions} = props

    const selectUtulokRef = useRef<HTMLSelectElement>(null)

    //const pickedUtulok = useSelector((state : RootState) => state.selectId)
    const dispatchPick = useDispatch();
    const actionPickCreator = bindActionCreators(setUtulokId, dispatchPick)

    const [labelsHidden, setLabelsHidden] = useState<boolean>(false)

    const handleChange = () => {
        setLabelsHidden(true)
        
        if (selectUtulokRef.current?.value)
        {
            var id: number = +selectUtulokRef.current.value
            actionPickCreator(id);
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
                        <option value={utulok.id}>
                            {utulok.name} 
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default MySelect
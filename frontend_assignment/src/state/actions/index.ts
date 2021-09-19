import { SumOption, Data, ShelterOption, RectangleType } from "../../Types/types"

interface Utulok {
    type: Data.SHELTER
    payload: ShelterOption
}
interface Suma {
    type: Data.SUM
    payload: SumOption
}
interface InputName {
    type: Data.NAME
    payload: string
}

interface InputSurname {
    type: Data.SURNAME
    payload: string
}

interface InputEmail {
    type: Data.EMAIL
    payload: string
}

interface InputPhoneNumber {
    type: Data.PHONENUMBER
    payload: string
}

interface InputRectangle {
    type: Data.RECTANGLE
    payload: RectangleType
}

interface InputCheckBox {
    type: Data.CHECKBOX
    payload: boolean
}

export type DataAction = InputName | InputSurname | InputEmail | InputPhoneNumber | Utulok | Suma | InputRectangle | InputCheckBox
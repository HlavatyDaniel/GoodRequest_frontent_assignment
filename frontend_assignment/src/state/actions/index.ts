import { InputOption, Data, UtulokOption } from "../../Types/types"

interface Utulok {
    type: Data.UTULOK
    payload: UtulokOption
}
interface Suma {
    type: Data.SUM
    payload: InputOption
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

export type DataAction = InputName | InputSurname | InputEmail | InputPhoneNumber | Utulok | Suma
import { DataAction} from "../actions"

import { InputOption, UtulokOption, Data } from "../../Types/types"

import { Dispatch } from "redux"

export const setUtulok = (utulok : UtulokOption) => {
    return (dispatch: Dispatch<DataAction>) => {
        dispatch({
            type: Data.UTULOK,
            payload : utulok
        })
    }
}

export const setInputValue = (inputValue : InputOption) => {
    return (dispatch : Dispatch<DataAction>) => {
        dispatch({
            type: Data.SUM,
            payload: inputValue
        })
    }
}

export const setName = (value : string) => {
    return (dispatch : Dispatch<DataAction>) => {
        dispatch({
            type: Data.NAME,
            payload: value
        })
    }
}

export const setSurname = (value : string) => {
    return (dispatch : Dispatch<DataAction>) => {
        dispatch({
            type: Data.SURNAME,
            payload: value
        })
    }
}

export const setEmail = (value : string) => {
    return (dispatch : Dispatch<DataAction>) => {
        dispatch({
            type: Data.EMAIL,
            payload: value
        })
    }
}

export const setPhoneNumber = (value : string) => {
    return (dispatch : Dispatch<DataAction>) => {
        dispatch({
            type: Data.PHONENUMBER,
            payload: value
        })
    }
}
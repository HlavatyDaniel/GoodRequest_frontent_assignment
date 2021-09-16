import { SelectAction } from "../actions"
import { InputAction } from "../actions"

import { InputOption } from "../../Types/types"

import { Dispatch } from "redux"

export const setUtulokId = (utulokId : number) => {
    return (dispatch: Dispatch<SelectAction>) => {
        dispatch({
            type: "set",
            payload : utulokId
        })
    }
}

export const setInputValue = (inputValue : InputOption) => {
    return (dispatch : Dispatch<InputAction>) => {
        dispatch({
            type: "set",
            payload: inputValue
        })
    }
}
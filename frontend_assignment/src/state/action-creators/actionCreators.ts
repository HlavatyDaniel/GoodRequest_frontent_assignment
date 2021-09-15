import {Action} from "../actions"

import { Dispatch } from "redux"

export const setUtulokId = (utulokId : number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: "set",
            payload : utulokId
        })
    }
}
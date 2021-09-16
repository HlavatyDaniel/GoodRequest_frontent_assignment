import { DataAction } from "../actions";
import { Data, UtulokOption } from "../../Types/types";

const initialState : UtulokOption = {id : 0, name : ""} 

const utulokReducer = (state : UtulokOption = initialState, action : DataAction) => {
    switch(action.type){
        case Data.UTULOK:
            state = action.payload;
            return state;
        default:
            return state
    }
}

export default utulokReducer

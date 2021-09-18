import { DataAction } from "../actions";
import { Data } from "../../Types/types"

const initialState : boolean = false;

const checkboxReducer = (state : boolean = initialState, action : DataAction) => {
    switch(action.type) {
        case Data.CHECKBOX:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default checkboxReducer
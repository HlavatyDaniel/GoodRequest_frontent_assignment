import { DataAction } from "../actions"
import { Data, InputOption } from "../../Types/types"
 
const initialState : InputOption = {id : 0, value : 0}

const sumReducer = (state : InputOption = initialState, action : DataAction) => {
    switch (action.type) {
        case Data.SUM:
            state = action.payload;
            return state;
        default:
            return state
    }
}

export default sumReducer
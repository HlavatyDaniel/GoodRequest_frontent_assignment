import { DataAction } from "../actions"
import { Data, SumOption } from "../../Types/types"
 
const initialState : SumOption = {id : 0, value : 0}

const sumReducer = (state : SumOption = initialState, action : DataAction) => {
    switch (action.type) {
        case Data.SUM:
            state = action.payload;
            return state;
        default:
            return state
    }
}

export default sumReducer
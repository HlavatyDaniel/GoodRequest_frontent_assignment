import { InputAction } from "../actions"
import { InputOption } from "../../Types/types"
 
const initialState : InputOption = {id : 0, value : 0}

const inputReducer = (state : InputOption = initialState, action : InputAction) => {
    switch (action.type) {
        case "set":
            state = action.payload;
            return state;
        default:
            return state
    }
}

export default inputReducer
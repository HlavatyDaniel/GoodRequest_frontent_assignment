import { DataAction } from "../actions";
import { Data, RectangleType} from "../../Types/types"

const initialState : RectangleType = RectangleType.NONE

const rectangleReducer = (state : RectangleType = initialState, action : DataAction) => {
    switch(action.type) {
        case Data.RECTANGLE:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default rectangleReducer
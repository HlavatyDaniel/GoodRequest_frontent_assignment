import { SelectAction } from "../actions";

const initialState : number = 0 

const selectReducer = (state : number = initialState, action : SelectAction) => {
    switch(action.type){
        case "set":
            state = action.payload;
            return state;
        default:
            return state
    }
}

export default selectReducer

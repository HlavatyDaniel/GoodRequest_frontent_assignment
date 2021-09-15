import { Action } from "../actions";

const initialState : number = 0 

const selectReducer = (state : number = initialState, action : Action) => {
    switch(action.type){
        case "set":
            state = action.payload;
            return state;
        default:
            return state
    }

}

export default selectReducer

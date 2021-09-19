import { DataAction } from "../actions";
import { Data, ShelterOption } from "../../Types/types";

const initialState : ShelterOption = {id : 0, name : ""} 

const utulokReducer = (state : ShelterOption = initialState, action : DataAction) => {
    switch(action.type) {
        case Data.SHELTER:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default utulokReducer

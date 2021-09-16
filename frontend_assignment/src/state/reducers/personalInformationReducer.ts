import { DataAction } from "../actions";
import { Data, PersonalInformationData } from "../../Types/types";

const initialState : PersonalInformationData = {name : "", surName : "", email : "", phoneNumber: ""}

const personalInformationReducer = (state : PersonalInformationData = initialState, action : DataAction) => {
    switch (action.type) {
        case Data.NAME:
            state.name = action.payload;
            return state;
        case Data.SURNAME:
            state.surName = action.payload;
            return state;
        case Data.EMAIL:
            state.email = action.payload;
            return state;
        case Data.PHONENUMBER:
            state.phoneNumber = action.payload;
            return state;
        default:
            return state
    }
}

export default personalInformationReducer
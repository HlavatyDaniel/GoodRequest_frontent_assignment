import { combineReducers  } from "redux";

import personalInformationReducer from "./personalInformationReducer";
import shelterReducer from "./shelterReducer";
import sumReducer from "./sumReducer";
import rectangleReducer from "./rectangleReducer";
import checkboxReducer from "./checkboxReducer";

const reducers = combineReducers({
    personalData : personalInformationReducer,
    shelterData : shelterReducer,
    sumData : sumReducer,
    rectangleData : rectangleReducer,
    checkBoxData : checkboxReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
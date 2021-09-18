import { combineReducers  } from "redux";

import personalInformationReducer from "./personalInformationReducer";
import utulokReducer from "./utulokReducer";
import sumReducer from "./sumReducer";
import rectangleReducer from "./rectangleReducer";

const reducers = combineReducers({
    personalData : personalInformationReducer,
    utulokData : utulokReducer,
    sumData : sumReducer,
    rectangleData : rectangleReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
import { combineReducers  } from "redux";

import personalInformationReducer from "./personalInformationReducer";
import utulokReducer from "./utulokReducer";
import sumReducer from "./sumReducer";

const reducers = combineReducers({
    personalData : personalInformationReducer,
    utulokData : utulokReducer,
    sumData : sumReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
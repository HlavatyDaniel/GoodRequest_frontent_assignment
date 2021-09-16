import { combineReducers  } from "redux";

import selectReducer from "./selectReducer"
import inputReducer from "./inputReducer"

const reducers = combineReducers({
    selectId: selectReducer,
    inputItem : inputReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
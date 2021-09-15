import { combineReducers  } from "redux";

import selectReducer from "./selectReducer"

const reducers = combineReducers({
    selectId: selectReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
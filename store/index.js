import { combineReducers, createStore } from "redux";

import listReducer from "./reducers/reducer";

const rootReducer = combineReducers({
    list: listReducer,
}) 

export default createStore(rootReducer)
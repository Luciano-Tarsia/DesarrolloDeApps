import { applyMiddleware, combineReducers, createStore } from "redux";

import listReducer from "./reducers/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    list: listReducer,
}) 

export default createStore(rootReducer, applyMiddleware(thunk))
import { combineReducers } from "redux";
import { operationsReducer } from "./todoapp/reducers/operations";

export const rootReducer = combineReducers({
    operationsReducer,

    // we can add more reducers here
})
import { globalReducer,countryReducer,SelectedCountryReducer } from "./Country/countryReducer";
import { covidStatusReducer } from "./Covid_risk/covidReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    globalReducer,
    countryReducer,
    SelectedCountryReducer,
    covidStatusReducer
})
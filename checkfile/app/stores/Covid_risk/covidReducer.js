import { SET_COVID_STATUS } from "./covidAction";

const initialStatus = {
    covidStat: 'low'
}

export const covidStatusReducer = (state=initialStatus,{type, payload}) => {
    switch (type) {
        case SET_COVID_STATUS:
            return {
                ...state,
                covidStat:payload.covidStatus
            }
        default:
            return state;
    }
}


export const SET_GLOBAL = 'SET_GLOBAL';
export const SET_COUNTRY = 'SET_COUNTRY';
export const PICK_COUNTRY = 'PICK_COUNTRY';
export function Set_Global_Data(globalData) {
    return dispatch => {
        dispatch({
            type: SET_GLOBAL,
            payload: {globalData}
        })
    }
}

export function Set_Country_Data(countryData){
    return dispatch => {
        dispatch({
            type: SET_COUNTRY,
            payload: {countryData}
        })

    }
}

export function Pick_Country(country){
    return dispatch => {
        dispatch({
            type:PICK_COUNTRY,
            payload: {country}
        })
    }
}
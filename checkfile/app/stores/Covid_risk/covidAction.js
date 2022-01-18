export const SET_COVID_STATUS = 'SET_COVID_STATUS';

export const  setStatus = (covidStatus)=> {
    return dispatch => {
        dispatch({
            type: SET_COVID_STATUS,
            payload:{covidStatus}
        })
    }
} 
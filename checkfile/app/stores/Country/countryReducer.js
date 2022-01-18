import { SET_GLOBAL,SET_COUNTRY,PICK_COUNTRY } from "./countryAction";
const initialState = {
    global:{
        
    }
}


export const globalReducer = (state=initialState,{type, payload}) => {
    switch (type) {
        case SET_GLOBAL:
            return {
                ...state,
                global:{
                    ...payload.globalData
                }
                
            }    
        
    
        default:
            return state;
    }
}



const countryInitalState = {
    countries:[
        
    ]
}

export const countryReducer = (state=countryInitalState,{type,payload}) => {
    switch (type) {
        case SET_COUNTRY:
            return {
                ...state,
                countries:payload.countryData   
            }
            
            
    
        default:
            return state;
    }
}


const selectedCountryState = {
    country:{
        callingCode: ['976'],
        cca2: 'MN',
        currency: ['MNT'],
        flag: 'flag-mn',
        name: 'Mongolia',
        region: 'Asia',
        subregion: 'Eastern Asia',
      }
}

export const SelectedCountryReducer = (state=selectedCountryState,{type,payload})=> {
    switch (type) {
        case PICK_COUNTRY:
            return {
                ...state,
                country:payload.country
            }
        default:
            return state;
    }
}




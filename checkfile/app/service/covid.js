import { covid_url } from "../config/rest_config";


export const getCountryCases = async () => {
    try {
        let covidapi = await fetch(covid_url);
        let result = await covidapi.json();
        covidapi = null;

        return result.Countries;

    }
    catch(error) {
        throw error;
    }
}


export const getGlobalCases = async () => {
    try {
        let covidapi = await fetch(covid_url);
        let result = await covidapi.json();
        covidapi = null;

        return result.Global;

    }
    catch(error) {
        throw error;
    }
}
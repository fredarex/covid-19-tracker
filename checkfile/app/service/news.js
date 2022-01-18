import { articles_url,query,date_from,date_to,sortBy,api_key } from "../config/rest_config";

export const getArticle = async () => {
    try{
        let articles = await fetch(`${articles_url}?q=${query}&from=${date_from}&to=${date_to}&sortBy=${sortBy}&apiKey=${api_key}`);
        
        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error){
        throw error;
    }
    

}
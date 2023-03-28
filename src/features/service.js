//*This file will be used to make http requests to API 

import axios from 'axios';

//NPS API were calling to 
const API_URL = 'https://developer.nps.gov/api/v1/parks?limit=467&api_key=CVikA0Ur6Sc8elaYgUcnOM9metTMgYqJalcZvYhN';



//*Get api data 
const getApiData = async () => {
    //GET request
    const response = await axios.get(API_URL);


    return response.data;
}

//export obj of all async functions
const service = {
    getApiData
}

//! --> slice.js
export default service;
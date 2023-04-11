//*This file will be used to make http requests to API 

import axios from 'axios';


//!STATIC VARIABLES
const all50StatesArr = [
    { state: "Alabama", abrev: "AL" },
    { state: "Alaska", abrev: "AK" },
    { state: "Arizona", abrev: "AZ" },
    { state: "Arkansas", abrev: "AR" },
    { state: "California", abrev: "CA" },
    { state: "Colorado", abrev: "CO" },
    { state: "Connecticut", abrev: "CT" },
    { state: "Delaware", abrev: "DE" },
    { state: "Florida", abrev: "FL" },
    { state: "Georgia", abrev: "GA" },
    { state: "Hawaii", abrev: "HI" },
    { state: "Idaho", abrev: "ID" },
    { state: "Illinois", abrev: "IL" },
    { state: "Indiana", abrev: "IN" },
    { state: "Iowa", abrev: "IA" },
    { state: "Kansas", abrev: "KS" },
    { state: "Kentucky", abrev: "KY" },
    { state: "Louisiana", abrev: "LA" },
    { state: "Maine", abrev: "ME" },
    { state: "Maryland", abrev: "MD" },
    { state: "Massachusetts", abrev: "MA" },
    { state: "Michigan", abrev: "MI" },
    { state: "Minnesota", abrev: "MN" },
    { state: "Mississippi", abrev: "MS" },
    { state: "Missouri", abrev: "MO" },
    { state: "Montana", abrev: "MT" },
    { state: "Nebraska", abrev: "NE" },
    { state: "Nevada", abrev: "NV" },
    { state: "New Hampshire", abrev: "NH" },
    { state: "New Jersey", abrev: "NJ" },
    { state: "New Mexico", abrev: "NM" },
    { state: "New York", abrev: "NY" },
    { state: "North Carolina", abrev: "NC" },
    { state: "North Dakota", abrev: "ND" },
    { state: "Ohio", abrev: "OH" },
    { state: "Oklahoma", abrev: "OK" },
    { state: "Oregon", abrev: "OR" },
    { state: "Pennsylvania", abrev: "PA" },
    { state: "Rhode Island", abrev: "RI" },
    { state: "South Carolina", abrev: "SC" },
    { state: "South Dakota", abrev: "SD" },
    { state: "Tennessee", abrev: "TN" },
    { state: "Texas", abrev: "TX" },
    { state: "Utah", abrev: "UT" },
    { state: "Vermont", abrev: "VT" },
    { state: "Virginia", abrev: "VA" },
    { state: "Washington", abrev: "WA" },
    { state: "West Virginia", abrev: "WV" },
    { state: "Wisconsin", abrev: "WI" },
    { state: "Wyoming", abrev: "WY" },
];

const all50Abrev = all50StatesArr.map((state) => state.abrev);


const apiKey = 'aKRtFxd8R2HrJ8AXsfpYj3NOxKNfDx0rfYgRP4EE';

//NPS API were calling to 
const API_URL = `https://developer.nps.gov/api/v1/parks?limit=467&api_key=${apiKey}`;


// 1 Park endpoint
// let parkCode = 'abli';
// const PARK_URL = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${apiKey}`;


//*Get api data 
const getApiData = async () => {
    //GET request
    const response = await axios.get(API_URL);

    return response.data;
}

//*Get api data thats sorted by state 
const getApiDataSortedByState = async () => {
    //GET request
    const response = await axios.get(API_URL);
    let actualData = response.data.data;

    if(actualData.length > 0){
        let parksInUSA = [];
        for(let i = 0; i < actualData.length; i++){
            //add park data to arr
            if(all50Abrev.includes(actualData[i].states)){
                parksInUSA.push(actualData[i]);
            }
        }
        console.log(parksInUSA);
    
        //sort parks by state
        let parksSortedByState = [];
        for(let i = 0; i < all50Abrev.length; i++){
            let parksInOneState = [];
            let currentStateAbrev = all50Abrev[i];
    
            //*368 parks runs
            for(let j = 0; j < parksInUSA.length; j++){
                //*if park's state abrev === current state abrev
                if(parksInUSA[j].states === currentStateAbrev) {
                    parksInOneState.push(parksInUSA[j]);
                }
            }
            parksSortedByState.push(parksInOneState);
        }
        console.log(parksSortedByState);
        return parksSortedByState;
    } else {
        //*rerun till it gets data
        getApiDataSortedByState();
    }
}

//*Get 1 park data
const getApiDataPark = async (parkCode) => {
    //! WORK ON THIS
    console.log({"service parkCode": parkCode})
    //GET request
        //? apiKey from this file
        //? parkCode comes from <-- slice.js <-- <Park/>
    const response = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${apiKey}`);

    return response.data;
}

//export obj of all async functions
const service = {
    getApiData,
    getApiDataSortedByState,
    getApiDataPark
}

//! --> slice.js
export default service;
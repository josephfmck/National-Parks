import React, { useState, useEffect } from 'react';

//*components 
import SearchForm from '../SearchForm';
import List from '../List';

//* bootstrap components 
import Container from 'react-bootstrap/Container';



//*API
import axios from 'axios';
// import { searchNPSAPI, parksWithinUSA } from '../../api/api';

//* CSS
import './index.scss';

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

const statesAbrev50 = all50StatesArr.map((state) => state.abrev);
// console.log(statesAbrev50);

//add Routes, start with path "/" and <Layout/> with <Home/> 
function Home() {

//*STATE
const [apiState, setApiState] = useState(null);
//? if data is still being fetched or not, false once loaded
const [isLoading, setIsLoading] = useState(true);
const [statesAbrev50Prop, setStatesAbrev50Prop] = useState(statesAbrev50);

// const [apiStateSorted, setApiStateSorted] = useState(null);

//*FUNCTIONS


  //*useEffect 
  //?fires when component loads(onpage load)
useEffect(() => { 
  //*func declares
  const fetchData = async () => {
    //*NPS API
    const result = await axios.get(`https://developer.nps.gov/api/v1/parks?limit=467&api_key=CVikA0Ur6Sc8elaYgUcnOM9metTMgYqJalcZvYhN`);
    console.log({'apiRAW': result.data});


    //*!arr of 370 parks in USA

    //!SORT IT 
    // const resultSortedParksByState = sortParksByState(result.data);



    //*SET STATE 
    //raw 370 data
    setApiState(result.data);
    setIsLoading(false);

    //

  }

  //*func calls
  fetchData();
}, []);


  //*RENDER
  return (
    <>
    <Container id="header">
      <h1 className="text-center"><strong>NATIONAL PARKS</strong></h1>
      <h3 className="text-center">TRAVEL GUIDE</h3>
    </Container>
    
    {/* *search-section form takes in API data */}
    <SearchForm isLoading={isLoading} apiState={apiState}/>
    <List isLoading={isLoading} apiState={apiState} statesAbrev50Prop={statesAbrev50Prop}/>
    </>
  );
}

export default Home;

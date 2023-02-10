import React, { useState, useEffect } from 'react';

//*components 
import SearchForm from '../SearchForm';
import List from '../List';

//* bootstrap components 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


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
const [apiState, setApiState] = useState([]);
//? if data is still being fetched or not, false once loaded
const [isLoading, setIsLoading] = useState(true);
//? parks data sorted by state
const [apiParksSorted2D, setApiParksSorted2D] = useState([]);

//*FUNCTIONS
// const usaParksData

const usaParksData = async (apiStateDATA) => {
  let parksInUSA = [];
  for(let i = 0; i < apiStateDATA.data.length; i++){
    //*API states data is included in the states arr 
    if(statesAbrev50.includes(apiStateDATA.data[i].states)) {
      //add that park into obj
      let obj = {
        i,
        img: apiStateDATA.data[i].images[0].url,
        fullName: apiStateDATA.data[i].fullName,
        states: apiStateDATA.data[i].states,
        description: apiStateDATA.data[i].description,
        url: apiStateDATA.data[i].url
      };
    
        parksInUSA.push(obj);
    }
  }


  //? got them in order now want to sort them in 50
  //*SORT IT OUT 
  let sortedParksByState2D = [];

    //50 states runs
    for(let i = 0; i < statesAbrev50.length; i++){
      let parksInOneState = [];
      let currentStateAbrev = statesAbrev50[i];

      //368 parks runs
      for(let j = 0; j < parksInUSA.length; j++){
        let currentParkObj = parksInUSA[j];

        // if the one of 368 state is equal to the abrev
        if(currentParkObj.states === currentStateAbrev){
          // if it is then push it into states obj 
          // let obj = {
          //     "state": currentStateAbrev,
          //     "park": currentParkObj
          // };

          let obj = currentParkObj;

          parksInOneState.push(obj);
          }
      }
      sortedParksByState2D.push(parksInOneState);
    }

  //*!arr of 370 parks in USA
  console.log(parksInUSA);
  console.log(sortedParksByState2D);

  const returnObj2D = [];
  // returnObj2D.push(parksInUSA);
  returnObj2D.push(sortedParksByState2D);

  setApiParksSorted2D(returnObj2D);
  console.log(returnObj2D);
  //? arr of parks in one state
  console.log(returnObj2D[0][0]);
  //? 1 park
  console.log(returnObj2D[0][0][0]);
  //? 1 img 
  console.log(returnObj2D[0][0][0].img);


  
  return returnObj2D;
}

  //*useEffect 
  //?fires when component loads(onpage load)
useEffect(() => { 
  //*func declares
  const fetchData = async () => {
    //*NPS API
    const result = await axios.get(`https://developer.nps.gov/api/v1/parks?limit=467&api_key=CVikA0Ur6Sc8elaYgUcnOM9metTMgYqJalcZvYhN`);
    console.log(result.data);

    //raw 370 data
    setApiState(result.data);
    setIsLoading(false);
    //func get parks sorted by states
    usaParksData(result.data);
  }

  //*func calls
  fetchData();
}, []);



//*Playing with State 
// console.log(apiParksSorted2D);
// //? arr of parks in one state
// console.log(apiParksSorted2D[0][0]);
// //? 1 park
// console.log(apiParksSorted2D[0][0][0]);


  //*RENDER
  return (
    <>
    <Container id="header">
      <h1 className="text-center"><strong>NATIONAL PARKS</strong></h1>
      <h3 className="text-center">TRAVEL GUIDE</h3>
    </Container>
    
    {/* *search-section form takes in API data */}
    <SearchForm isLoading={isLoading} apiState={apiState}/>
    <List isLoading={isLoading} apiParksSorted2D={apiParksSorted2D}/>
    </>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';

//*components 
import SearchForm from '../SearchForm';

//* bootstrap components 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

//*API
import axios from 'axios';
import { searchNPSAPI, parksWithinUSA } from '../../api/api';

//* CSS
import './index.scss';



//add Routes, start with path "/" and <Layout/> with <Home/> 
function Home() {

//*STATE
const [apiState, setApiState] = useState([]);
//? if data is still being fetched or not, false once loaded
const [isLoading, setIsLoading] = useState(true);

//*NPS API


  //*useEffect 
  //?fires when component loads(onpage load)
useEffect(() => { 
  //*func declares
  const fetchData = async () => {
    const result = await axios.get(`https://developer.nps.gov/api/v1/parks?limit=467&api_key=CVikA0Ur6Sc8elaYgUcnOM9metTMgYqJalcZvYhN`);
    console.log(result.data);

    setApiState(result.data);
    setIsLoading(false);
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

    {/* SECTION Parks by State */}
    <section id="parks-by-state-section">
      <Container>
        <h1>This will be parks section of looped imgs of all parks in specific state</h1>
        {/* <p>{`${apiState}`}</p> */}
      </Container>
    </section>
    </>
  );
}

export default Home;

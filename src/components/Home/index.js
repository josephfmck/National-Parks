import React, { useState, useEffect } from 'react';

//* bootstrap components 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

//*API
import axios from 'axios';
import { searchNPSAPI, parksWithinUSA } from '../../api/api';

//* CSS
import './index.scss';



// useEffect((callApi) => {
//   setApiState(callApi());
// }, []);


//add Routes, start with path "/" and <Layout/> with <Home/> 
function Home() {

//*STATE
const [apiState, setApiState] = useState([]);
//? if data is still being fetched or not, false once loaded
const [isLoading, setIsLoading] = useState(true);

//*NPS API
// let apiParksInUSA;
// const callApi = async () => {
//   let apiData = await searchNPSAPI();
//   console.log({apiData});
//   setApiState(apiData);


//   apiParksInUSA = await parksWithinUSA();
//   console.log({apiParksInUSA});

//   return apiData;
// };

// callApi();


  //*useEffect 
  //?fires when component loads(onpage load)
useEffect(() => { 
  //*func declares
  const fetchData = async () => {
    const result = axios(`https://developer.nps.gov/api/v1/parks?limit=467&api_key=CVikA0Ur6Sc8elaYgUcnOM9metTMgYqJalcZvYhN`);
    console.log(result);
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
    
    {/* convert #search-section to a component */}
    <section id="search-section">
      <Container>
        <Row>
          <Form id="search-form">

            {/*Directly takes to park page on click */}
            {/* {form-group is a div} */}
            <Form.Group>
              <Form.Label className="search-label">Pick a National Park</Form.Label>
              <Form.Select className="search-selectTag mb-2" aria-label="Select A State">
                <option>Search for a national park</option>
                <option value="Acadia National Park">Acadia National Park</option>
                <option value="IL">IL</option>
                <option value="WA">WA</option>
              </Form.Select>
            </Form.Group>

            <div className="label-break">            
              <p className='my-0'>Or...</p>
            </div>

            {/* Brings up component list of all parks within state */}
            <Form.Group>
            <Form.Label className="search-label">Search a Park By State</Form.Label>
              <Form.Select className="search-selectTag mb-5" aria-label="Select A Park">
                <option>Select a State</option>
                <option value="KS">Kansas</option>
                <option value="IL">Illinois</option>
                <option value="WA">Washington</option>
              </Form.Select>
            </Form.Group>

            {/* REPLACED WITH ONCLICK ON THE OPTIONS ABOVE */}
            {/* <button
              className="btn btn-light btn-lg search-btn"
              id="select-state-btn"
            >
              SELECT PARK
            </button> */}

          </Form>
        </Row>
      </Container>
    </section>


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

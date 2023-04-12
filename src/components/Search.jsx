import { useState, useEffect } from 'react'

//* bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import "./index.scss";

// useSelector - select from the state to bring in
// useDispatch - dispatch actions to store (functions, API calls, thunk functions)
import {useDispatch, useSelector} from 'react-redux'

//*react router redirect  - navigate to other pages
import { Redirect, Link } from 'react-router-dom'

//*Redux
import {fetchData, resetStatus, onChangeStateAction, onChangeParkAction} from '../features/slice'


//*components
import Spinner from "./Spinner";


const usaStatesArr = [
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





//if isLoading false then show the form else show a Loading... message 
const Search = () => {
  //!COMP STATE 

  //!SLICE STATE 
  const dispatch = useDispatch(); 

  //*grab state from store Slice 
  const {apiData, isLoading, isSuccess, isError, message, onChangeParkVal} = useSelector((state) => state.slice);


  //!EVENT LISTENERS
  //*onChangePark for park select
  const onChangePark = (e) => {
    console.log(e.target.value);


    //set slice of state to select value, parkCode to submit and redirect to <Park/>
    dispatch(onChangeParkAction(e.target.value));
  }

  //*onChangeState for state select
  const onChangeState = (e) => { 
    console.log(e.target.value);

    //set slice of state to select value, updating the <List/>
    dispatch(onChangeStateAction(e.target.value));
  }

  //*onSubmit for form 
  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   if(!onChangeParkVal) {
  //     return alert('Please select a park')
  //   } else {
  //     console.log({'onChangePark': onChangeParkVal});
  //     //redirect to park page
  //     let url = `/park/${onChangeParkVal}`;
  //     window.location = url;
  //   }
  // }



  //*useEffect - check for changes in state 
  //? [] - fires off if state changes 
  useEffect(() => {
    //have api data in state before rendering
    dispatch(fetchData());

  }, [dispatch]);

  //!RUN SPINNER BEFORE RENDER 
    //!RENDER
    return !isSuccess ? <Spinner/> : (
    <>
      <section id="search-section">
        <Container>
          <Row>
            <Form id="search-form">
              {/*Directly takes to park page on click */}
              {/* {form-group is a div} */}
              <Form.Group>
                <Form.Label className="search-label">
                  Pick a National Park
                </Form.Label>
                <Form.Select
                  className="search-selectTag mb-2"
                  aria-label="Select A State"
                  onChange={onChangePark}
                >
                  <option>Search for a national park</option>
                  {apiData.data.map((park) => {
                      return (<option key={park.id} value={park.parkCode}>{park.fullName}</option>)
                  })}
                </Form.Select>
              </Form.Group>
              <Button 
                variant="primary" 
                type="submit"
              >
                <Link to={`/park/${onChangeParkVal}`}>
                  Visit Park
                </Link>
              </Button>

              <div className="label-break">
                <p className="my-5">Or...</p>
              </div>

                {/* Brings up component list of all parks within state */}
                <Form.Group>
                    <Form.Label className="search-label">
                    Search a Park By State
                    </Form.Label>
                    {/* onChangeState set 0-49 value to state  */}
                    <Form.Select
                      className="search-selectTag mb-5"
                      aria-label="Select A Park"
                      onChange={onChangeState}
                    >
                    <option>Select a State</option>
                    {usaStatesArr.map((obj, idx) => {
                    return (
                        <option key={idx} value={idx}>
                            {obj.state}
                        </option>
                    );
                    })}
                    </Form.Select>
                </Form.Group>

              {/* Brings up component list of all parks within state */}


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
    </>
  );
};

export default Search;

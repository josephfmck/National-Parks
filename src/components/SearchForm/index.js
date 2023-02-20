import { useState } from 'react'

//* bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import "./index.scss";


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
const SearchForm = ({isLoading, apiState, selectStateIdxArr, onChangeStateOption}) => {
  //!STATE 
  // const [stateOptionVal, setStateOptionVal] = useState(null);


  //!EVENT LISTENERS
  const onChangeOption = (e) => {
    e.preventDefault();

    console.log(e.target.value);

    //set to option event value (0-49)
    // setStateOptionVal(e.target.value);
    onChangeStateOption(e.target.value);
  };
  
  
  
  //!RENDER
  return isLoading ? (<h1>Form Loading...</h1>) : (
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
                >
                  <option>Search for a national park</option>
                    {apiState.data.map((park) => {
                        return (<option key={park.id} value={park.fullName}>{park.fullName}</option>)
                    })}
                </Form.Select>
              </Form.Group>

              <div className="label-break">
                <p className="my-0">Or...</p>
              </div>

              {/* Brings up component list of all parks within state */}
              <Form.Group>
                <Form.Label className="search-label">
                  Search a Park By State
                </Form.Label>
                {/* onChange set 0-49 value to state  */}
                <Form.Select
                  className="search-selectTag mb-5"
                  aria-label="Select A Park"
                  onChange={onChangeOption}
                >
                  <option>Select a State</option>
                  {usaStatesArr.map((usaStatesArr, idx) => {
                    return (
                      <option key={idx} value={selectStateIdxArr[idx]}>
                        {usaStatesArr.state}
                      </option>
                    );
                  })}
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
    </>
  );
};

export default SearchForm;

//* bootstrap components 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


import './index.scss';



//add Routes, start with path "/" and <Layout/> with <Home/> 
function Home() {

  //*STATE
  // 



  //*useEffect 

//*NPS API

//!Vanilla JS
const NPSKey = "CVikA0Ur6Sc8elaYgUcnOM9metTMgYqJalcZvYhN";
//Ex. https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=CVikA0Ur6Sc8elaYgUcnOM9metTMgYqJalcZvYhN

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
console.log(statesAbrev50);



//* Return data from API
const searchAllNPSAPI = async () => {
  const res = await fetch(
    `https://developer.nps.gov/api/v1/parks?limit=467&api_key=${NPSKey}`
  );
  const data = await res.json();

  console.log(data);
  //2nd national park
  console.log(data.data[0]);

  //national park's states
  console.log(data.data[0].states);




  //*NEED 
  //  fullName, states,  

  let parksInUSA = []
  for(let i = 0; i < data.data.length; i++){

    //*API states data is included in the states arr 
    if(statesAbrev50.includes(data.data[i].states)) {
          //add that park into obj
    let obj = {
      i,
      fullName: data.data[i].fullName,
      states: data.data[i].states
    };

    parksInUSA.push(obj);
    }
  }

  console.log({parksInUSA});



  //*Sort out all the parks by state 
  //loop parksInUSA
  //loop all50StatesArr find the state that matches the park's state


  //* filled with objects
  let parksHalfSorted = [];
  //obj "state" = "KS", {park}, park2 

  //*loop through all 50 states abrev
  statesAbrev50.map((abrev) => {

    //*loop through 368 parksInUSA DATA
    parksInUSA.map((park) => {
      // the park data has the current abrev then push it
      if(park.states === abrev){
        parksHalfSorted.push(park);
        //?return updated parksHalfSorted
        return parksHalfSorted;
      }
    });

    //?return it again
    return parksHalfSorted;
  });

  console.log({parksHalfSorted});

  //? got them in order now want to sort them in 50
  //*SORT IT OUT 
  let sortedParksByState2D = [];

  //50 states runs
  for(let i = 0; i < statesAbrev50.length; i++){
    let parksInOneState = [];
    let currentState = statesAbrev50[i];

    //368 parks runs
    for(let j = 0; j < parksHalfSorted.length; j++){
      let currentPark = parksHalfSorted[j];


      // if the one of 368 state is equal to the abrev
      if(currentPark.states === currentState){
        // if it is then push it into states obj 
        let obj = {
          "state": currentState,
          "park": currentPark
        };

        parksInOneState.push(obj);
      }
    }

    sortedParksByState2D.push(parksInOneState);
  }

  console.log(sortedParksByState2D);



  //FIND PARK WITH THAT STATE ABBREV 




  return data;
};


//execute function 
searchAllNPSAPI();




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
              <p className='my-0'>Or</p>
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
      </Container>
    </section>
    </>
  );
}

export default Home;

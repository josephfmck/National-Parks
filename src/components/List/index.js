import React, { useState, useEffect } from 'react';

import './index.scss'
//* assets
import parkNameImg from '../../assets/images/park-name.jpg';

//* bootstrap components 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

//class="App" main wrapper of application
//? span is for identifying body tag and end of html tag

const List = ({isLoading, apiState, statesAbrev50Prop}) => {
  //*STATE 
  //? parks data sorted by state
  const [apiParksSorted2D, setApiParksSorted2D] = useState([]);
  const [parkImg, setParkImg] = useState('');



  //*useEffect 
  //?using for when compnent updates to grab API data correctly 
  useEffect(() => { 
    //*func declares

    
  //*FUNCTIONS
  const usaParksData = async () => {
    let parksInUSA = [];
    for(let i = 0; i < apiState.data.length; i++){
      //*API states data is included in the states arr 
      if(statesAbrev50Prop.includes(apiState.data[i].states)) {
        //add that park into obj
        let obj = {
          i,
          img: apiState.data[i].images[0].url,
          fullName: apiState.data[i].fullName,
          states: apiState.data[i].states,
          description: apiState.data[i].description,
          url: apiState.data[i].url
        };
      
          parksInUSA.push(obj);
      }
    }
  
    //? got them in order now want to sort them in 50
    //*SORT IT OUT 
    let sortedParksByState2D = [];
  
      //50 states runs
      for(let i = 0; i < statesAbrev50Prop.length; i++){
        let parksInOneState = [];
        let currentStateAbrev = statesAbrev50Prop[i];
  
        //368 parks runs
        for(let j = 0; j < parksInUSA.length; j++){
          let currentParkObj = parksInUSA[j];
  
          // if the one of 368 state is equal to the abrev
          if(currentParkObj.states === currentStateAbrev){
            // if it is then push it into states obj 
  
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
  
  
    //*SET STATE
    setApiParksSorted2D(returnObj2D);
    console.log(returnObj2D);
    setParkImg(returnObj2D[0][0][0].img);

    // //? arr of parks in one state
    // console.log(returnObj2D[0][0]);
    // //? 1 park
    // console.log(returnObj2D[0][0][0]);
    // //? 1 img 
    // console.log(returnObj2D[0][0][0].img);
  }

  
    //*func calls
    //func get parks sorted by states
    usaParksData();
  }, [apiState, statesAbrev50Prop]);



    console.log(isLoading);
    console.log(apiParksSorted2D);
    console.log(parkImg);
    return isLoading ? (<h1>List Loading...</h1>) : ( 
    <>

    {/* SECTION Parks by State */}
    <section id="parks-by-state-section">
      <Container>
        <h1>This will be parks section of looped imgs of all parks in specific state</h1>
        {/* <p>{`${apiState}`}</p> */}
        <Row className='my-3'>
          <Col>
            <Card style={{ width: '18rem', height:'100%' }}>
              <Card.Img variant="top" src={parkNameImg} />
              <Card.Body>
                <Card.Title>Abraham Lincoln Birthplace National Historical Park</Card.Title>
                <Button variant="primary">Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', height:'100%' }}>
              <Card.Img variant="top" src={parkImg} />
              <Card.Body>
                <Card.Title>Acadia National Park</Card.Title>
                <Button variant="primary">Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', height:'100%' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Adams National Historical Park</Card.Title>
                <Button variant="primary">Select</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='my-3'>
          <Col>
            <Card style={{ width: '18rem', height:'100%' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Abraham Lincoln Birthplace National Historical Park</Card.Title>
                <Button variant="primary">Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', height:'100%' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Acadia National Park</Card.Title>
                <Button variant="primary">Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', height:'100%' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Adams National Historical Park</Card.Title>
                <Button variant="primary">Select</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

    </>
    )
}

export default List
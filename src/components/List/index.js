import React, { useState, useEffect } from 'react';

//*API
import axios from 'axios';

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

const List = ({isLoading, apiState, statesAbrev50Prop, selectedStateVal}) => {

  //*STATE
  const [listIsloading, setListIsLoading] = useState(true);
  const [sortedParksByState2D, setSortedParksByState2D] = useState([]);

  useEffect(() => {
    console.log('hit useEffect');

    //func declares 
    const sortParksByState2D = async () => {
          //*NPS API
      const result = await axios.get(`https://developer.nps.gov/api/v1/parks?limit=467&api_key=CVikA0Ur6Sc8elaYgUcnOM9metTMgYqJalcZvYhN`);

      console.log('hit');
      console.log(result.data);
      if(result.data.length !== 0) {
        
        let parksInUSA = [];
        for(let i = 0; i < result.data.data.length; i++){
          //*API states data is included in the states arr 
          if(statesAbrev50Prop.includes(result.data.data[i].states)) {
            //add that park into obj
            let obj = {
              i,
              img: result.data.data[i].images[0].url,
              fullName: result.data.data[i].fullName,
              states: result.data.data[i].states,
              description: result.data.data[i].description,
              url: result.data.data[i].url
            };
            
            parksInUSA.push(obj);
          }
        }
        console.log({parksInUSA});
    
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
        console.log({sortedParksByState2D});
        Array.from(sortedParksByState2D);
      
        setSortedParksByState2D(sortedParksByState2D);
        setListIsLoading(false);
      } else {
        //*rerun it till it has data 
        sortParksByState2D();
      }
    }
  
  
  


    //func calls 
    sortParksByState2D();
  },[statesAbrev50Prop]);

  

  // console.log(apiState);
  // console.log(statesAbrev50Prop);
    



    return listIsloading ? (<h1>List Loading...</h1>) : ( 
    <>
    {/* SECTION Parks by State */}
    <section id="parks-by-state-section">
      <Container>
        {/* <p>{`${apiState}`}</p> */}
        <Row className='my-3'>

          {/* sortedParksByState2D[0] = Alabama arr of 8 parks */}
          {console.log(sortedParksByState2D)}
          {console.log(sortedParksByState2D[0])}
          {console.log(sortedParksByState2D[0][0])}

          {/* && = if selectedStateVal isnt null, is null until you select state option */}
          {selectedStateVal && sortedParksByState2D[selectedStateVal].map((park) => {
            return (
              <Col>
                <Card style={{ width: '18rem', height:'100%' }}>
                  <Card.Img variant="top" src={park.img} />
                  <Card.Body>
                    <Card.Title>{park.fullName}</Card.Title>
                    <Button variant="primary">Select</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
    </>
    )
}

export default List
import { useState, useEffect } from 'react';

//*API
// import axios from 'axios';

// import './index.scss'
//* assets
// import parkNameImg from '../../assets/images/park-name.jpg';

//* bootstrap components 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import {useDispatch, useSelector} from 'react-redux'
import {fetchDataSortedByState} from '../features/slice'

import { Link } from 'react-router-dom';

import Spinner from './Spinner';

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

function List() {
  const dispatch = useDispatch();

  const {sortedApiData, isLoading2, isSuccess2, isError2, message2, onChangeStateVal} = useSelector(state => state.slice)

  useEffect(() => {

    dispatch(fetchDataSortedByState());
  }, [dispatch]);

  return !isSuccess2 ? <Spinner/> :  (
    <>
    {/* SECTION Parks by State */}
      <Container id="parks-by-state-section">
        {!onChangeStateVal ? '' : 
          <div className="title">
            <h1 className="my-3">{`Parks Within ${usaStatesArr[onChangeStateVal].state}`}</h1>
          </div>
        }
        <Row className='my-3'>
          {/* sortedApiData[0] - arr of parks in 1 state */}
          {/* sortedApiData[0][0] - 1 park in 1 state */}
          {/* sortedApiData[state from state option input] */}
          {!onChangeStateVal ? '' : sortedApiData[onChangeStateVal].map((park, index) => {
            return (
              <Col className="my-3" key={index}>
                <Card style={{ width: '18rem', height:'100%' }}>
                  <Card.Img variant="top" className="preview-img" src={park.images[0].url} />
                  <Card.Body>
                    <Card.Title>{park.fullName}</Card.Title>
                    <Button variant="primary">
                      <Link to={`/park/${park.parkCode}`}>
                        Select
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default List
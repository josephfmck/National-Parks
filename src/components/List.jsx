import { useState, useEffect, useInsertionEffect } from 'react';

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

import Spinner from './Spinner';

function List() {
  const dispatch = useDispatch();

  const {sortedApiData, isLoading2, isSuccess2, isError2, message2, onChangeVal} = useSelector(state => state.slice)

  useEffect(() => {

    dispatch(fetchDataSortedByState());
  }, [dispatch]);

  return !isSuccess2 ? <Spinner/> :  (
    <>
    {/* SECTION Parks by State */}
    <section id="parks-by-state-section">
      <Container>
        {/* <p>{`${apiState}`}</p> */}
        <Row className='my-3'>
          {/* sortedApiData[0] - arr of parks in 1 state */}
          {/* sortedApiData[0][0] - 1 park in 1 state */}
          {/* sortedApiData[state from state option input] */}
          {!onChangeVal ? '' : sortedApiData[onChangeVal].map((park, index) => {
            return (
              <Col key={index}>
                <Card style={{ width: '18rem', height:'100%' }}>
                  <Card.Img variant="top" src={park.images[0].url} />
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
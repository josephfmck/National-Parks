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


function List() {
  return (
    <>
    {/* SECTION Parks by State */}
    <section id="parks-by-state-section">
      <Container>
        {/* <p>{`${apiState}`}</p> */}
        <Row className='my-3'>

          {/* sortedParksByState2D[0] = Alabama arr of 8 parks */}

          {/* && = if selectedStateVal isnt null, is null until you select state option */}
            return (
              <Col>
                <Card style={{ width: '18rem', height:'100%' }}>
                  <Card.Img variant="top" src={0} />
                  <Card.Body>
                    <Card.Title>{0}</Card.Title>
                    <Button variant="primary">Select</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
        </Row>
      </Container>
    </section>
    </>
  )
}

export default List
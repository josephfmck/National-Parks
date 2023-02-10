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

const List = ({isLoading, apiParksSorted2D}) => {

    console.log(apiParksSorted2D);
    let parkImg = apiParksSorted2D[0][0][0].img;
    console.log(apiParksSorted2D[0][0][0].img);
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
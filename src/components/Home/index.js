//* bootstrap components 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


import './index.scss';



//add Routes, start with path "/" and <Layout/> with <Home/> 
function Home() {
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
            <Form.Group>
              <Form.Label className="search-label">Pick a National Park</Form.Label>
              <Form.Select className="search-selectTag mb-5" aria-label="Select A State">
                <option>Search for a national park</option>
                <option value="Acadia National Park">Acadia National Park</option>
                <option value="IL">IL</option>
                <option value="WA">WA</option>
              </Form.Select>
            </Form.Group>

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
    </>
  );
}

export default Home;

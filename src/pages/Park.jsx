import { useState, useEffect } from 'react';
//* router to grab dynamic parkCode 
import { useParams } from 'react-router-dom';

//*bootstrap components 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//*redux
import {useDispatch, useSelector} from 'react-redux'
import { fetchDataPark } from '../features/slice';

//*components 
import Spinner from '../components/Spinner';

//*CSS 
import './index.scss';

function Park() {
    //*grab parkCode from url
    const { parkCode } = useParams();
    console.log(parkCode);



    //!SLICE STATE
    const dispatch = useDispatch();

    //*grab state from store Slice
    const { parkApiData, isLoading3, isError3, isSuccess3, message3 } = useSelector((state) => state.slice);


    useEffect(() => {

        console.log({'useEffect parkCode': parkCode});
        //*fetch park using parkCode
        dispatch(fetchDataPark(parkCode));
    }, [dispatch, parkCode]);

  return !isSuccess3 ? <Spinner/> : (
    <div id="bg-img" 
            className=''
            style={{
                backgroundImage: `url(${parkApiData.data[0].images[0].url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
        <Container id="header" className="">
            <h1 className='text-center'><strong>{parkApiData.data[0].fullName}</strong></h1>
        </Container>
        <Container id="info-container">
            <div className='info p-3 m-5'>
                <p>{parkApiData.data[0].description}</p> 
                <p>{parkApiData.data[0].directionsInfo}</p>     
            </div>
            <Row>
                {parkApiData.data[0].images.map((img, index) => {
                    return (
                    <Col className="my-3" key={index}>
                        <Card style={{ width: '18rem', height:'100%' }}>
                            <Card.Img variant="top" className="preview-img" src={img.url} />
                            <Card.Body>
                                <Card.Title>{img.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                })}
            </Row>
            <div className='info p-4 my-5'>
                <h1>Operating Hours</h1>
                <h3>{parkApiData.data[0].operatingHours[0].description}</h3>            
            </div>
            <div className='info p-4 my-5'>
                <h1>Address:</h1>
                    <Row>
                        <h3>{parkApiData.data[0].addresses[0].line1}</h3>
                    </Row>
                    <Row>
                        <h3>
                            {parkApiData.data[0].addresses[0].city},
                            {parkApiData.data[0].addresses[0].stateCode}
                            {parkApiData.data[0].addresses[0].postalCode}
                        </h3>
                    </Row>
            </div>
            <div className="info p-4 my-5">
                <h1>Contact Info</h1>
                <h3>{parkApiData.data[0].contacts.phoneNumbers[0].phoneNumber}</h3>
                <h3>{parkApiData.data[0].contacts.emailAddresses[0].emailAddress}</h3>
            </div>
            <div className="info p-4 my-5">
                <h3>etc.</h3>
                <h3>{parkApiData.data[0].parkCode}</h3>
                <h3>{parkApiData.data[0].directionsUrl}</h3>
                <h3>{parkApiData.data[0].url}</h3>
            </div>
        </Container>
        </div>
  )
}

export default Park;

import { useState, useEffect } from 'react';
//* router to grab dynamic parkCode 
import { useParams } from 'react-router-dom';

//*bootstrap components 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

//*redux
import {useDispatch, useSelector} from 'react-redux'
import { fetchDataPark } from '../features/slice';

//*components 
import Spinner from '../components/Spinner';

//*CSS 
import './park.scss';

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
        <Container id="park-header" className="mt-5 text-center">
            <div>
                <h1><strong>{parkApiData.data[0].fullName}</strong></h1>
            </div>
        </Container>

        <Container id="carousel-container" className='my-4'>
            <div className='carousel-sizer mx-auto'>
                <Carousel className="px-5 mx-5">
                {parkApiData.data[0].images.map((img, index) => {
                    return (
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img.url}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{img.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                })}
                </Carousel>
            </div> 
        </Container>

        <Container id="info-container">
            <div className='info p-3'>
                <p>{parkApiData.data[0].description}</p> 
                <p>{parkApiData.data[0].directionsInfo}</p>     
            </div>

            {/* {parkApiData.data[0].operatingHours[0].description ? (                
                <div className='info p-4 my-5'>
                    <h1>Operating Hours</h1>
                    <h3>{parkApiData.data[0].operatingHours[0].description}</h3>            
                </div>
                ) : null
            } */}
            <Row className='mb-5'>
                <Col>
                    <div className='info p-4 mt-5'>
                        <h3>Address:</h3>
                        <Row>
                            <p className='m-0'>{parkApiData.data[0].addresses[0].line1}</p>
                        </Row>
                        <Row>
                            <p className='m-0'>{`${parkApiData.data[0].addresses[0].city}, ${parkApiData.data[0].addresses[0].stateCode} ${parkApiData.data[0].addresses[0].postalCode}`}
                            </p>
                        </Row>
                    </div>
                </Col>
                <Col>
                    <div className="info p-4 mt-5">
                        <h3>Contact Info</h3>
                        <p>{parkApiData.data[0].contacts.phoneNumbers[0].phoneNumber}</p>
                        <p>{parkApiData.data[0].contacts.emailAddresses[0].emailAddress}</p>
                    </div>
                </Col>
            </Row>


            <Button className="mx-auto px-3 py-2 mb-5">
                {/* aTag for external sites */}
                <a href={parkApiData.data[0].url} target="_blank" rel="noreferrer">Learn More</a>
            </Button>
            {/* <div className="info p-4 my-5">
                <h3>etc.</h3>
                <h3>{parkApiData.data[0].parkCode}</h3>
                <h3>{parkApiData.data[0].directionsUrl}</h3>
                <h3>{parkApiData.data[0].url}</h3>
            </div> */}
        </Container>
        </div>
  )
}

export default Park;

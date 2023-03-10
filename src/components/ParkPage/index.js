import React, { useState, useEffect } from 'react';

//*API
import axios from 'axios';

//* bootstrap components 
import Container from 'react-bootstrap/Container';
//* CSS
import './index.scss';




const ParkPage = () => {

    //*STATE
    const [parkData, setParkData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {

        //*Park data, request with parkCode
        const fetchParkAPIData = async () => {
        //   `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${NPSKey}`
        const res = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=abli&api_key=CVikA0Ur6Sc8elaYgUcnOM9metTMgYqJalcZvYhN`);
        console.log({"parkData": res.data});
        console.log(res.data.data[0].fullName);
        setParkData(res.data);
        setDataLoading(false);
        }

        //*func calls 
        fetchParkAPIData();
    }, []);



    return dataLoading ? (<h1>Park Loading...</h1>) : (
        <div id="bg-img" 
            className=''
            style={{
                backgroundImage: `url(${parkData.data[0].images[0].url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
        <Container id="header" className="">
            <h1 className='text-center'><strong>{parkData.data[0].fullName}</strong></h1>
        </Container>
        <Container id="container">
            <h3>{parkData.data[0].description}</h3>
            <h3>{parkData.data[0].description}</h3>
            <h3>{parkData.data[0].directionsInfo}</h3>
            <h3>{parkData.data[0].parkCode}</h3>
            <h3>{parkData.data[0].directionsUrl}</h3>
            <h3>{parkData.data[0].url}</h3>
        </Container>
        </div>
    )
}

export default ParkPage;
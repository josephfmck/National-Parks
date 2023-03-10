import React, { useState, useEffect } from 'react';

//*API
import axios from 'axios';

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
        <>
        <h1>{parkData.data[0].fullName}</h1>
        </>
    )
}

export default ParkPage;
import React, { useState, useEffect } from 'react';

//*components 
import Search from '../components/Search';
import List from '../components/List';

//* bootstrap components 
import Container from 'react-bootstrap/Container';

//*API
import axios from 'axios';
// import { searchNPSAPI, parksWithinUSA } from '../../api/api';

//* CSS
import './home.scss';


//!STATIC VARIABLES



function Home() {
    //*State 

    //*useEffect






    //*RENDER 
    return (
    <>
        <Container id="home-header-container" className="mt-5 text-center">
            <div className='header'>
                <h1><strong>NATIONAL PARKS</strong></h1>
                <h3><strong>TRAVEL GUIDE</strong></h3>
            </div>
        </Container>
        {/* *search-section form takes in API data */}
        <Search />
        <List />
    </>
  )  
}

export default Home



import React, { Fragment, useContext } from "react";
import NpsContext from "../../context/nps/npsContext";

const ParkInfo = () => {
  const npsContext = useContext(NpsContext);

  const { description, directionsInfo, weatherInfo } =
    npsContext.parkChosenData;
  return (
    <Fragment>
      <section id='park-section'>
        <div className='container'>
          <div className='description-div bg-white'>
            <p id='description'>{description}</p>
          </div>

          <div className='flex-container'>
            <div className='directions-div bg-white'>
              <h3 className='text-center'>Directions</h3>
              <p id='directions-info'>{directionsInfo}</p>
            </div>

            <div className='weather-div bg-white'>
              <h3 className='text-center'>Weather</h3>
              <p id='weather-info'>{weatherInfo}</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ParkInfo;

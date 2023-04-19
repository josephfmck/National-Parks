import React, { useContext, Fragment } from "react";
import exampleImg from "../../images/parks/acadia.jpg";
import NpsContext from "../../context/nps/npsContext";

// For dynamic background img of park

const Background = () => {
  const npsContext = useContext(NpsContext);
  const { images } = npsContext.parkChosenData;

  return (
    <Fragment>
      <div id='overlay'></div>
      <div
        className='park-background'
        style={{ backgroundImage: `url(${images[0].url})` }}
      ></div>
    </Fragment>
  );
};

export default Background;

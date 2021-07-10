import React, { Fragment, useContext, useEffect } from "react";
import NpsContext from "../../context/nps/npsContext";
import { Link } from "react-router-dom";

const ParkHeader = () => {
  const npsContext = useContext(NpsContext);

  const { name, url } = npsContext.parkChosenData;

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Fragment>
      <div className='container' id='header'>
        <h1 className='text-center'>
          <strong>{name}</strong>
        </h1>
        <h3 className='text-center'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            Park's Official Website
          </a>
        </h3>
        <Link to={"/"}>
          <button id='back-home-btn'>HOME</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default ParkHeader;

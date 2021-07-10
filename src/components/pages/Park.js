import React, { Fragment } from "react";
import ParkHeader from "../layout/ParkHeader";
import ParkInfo from "../parks/ParkInfo";
import Background from "../layout/Background";

const Park = () => {
  return (
    <Fragment>
      <Background />
      <ParkHeader />
      <ParkInfo />
    </Fragment>
  );
};

export default Park;

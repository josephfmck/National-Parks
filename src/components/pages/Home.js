import React, { Fragment } from "react";
import Header from "../layout/Header";
import Search from "../parks/Search";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Search />
    </Fragment>
  );
};

export default Home;

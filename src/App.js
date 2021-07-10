import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Park from "./components/pages/Park";
import NotFound from "./components/pages/NotFound";

import NpsState from "./context/nps/NpsState";

//*main css for every component
import "./App.css";

const App = () => {
  return (
    <NpsState>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* unique parkCode for each */}
          <Route exact path='/park/:parkCode' component={Park} />
        </Switch>
      </Router>
    </NpsState>
  );
};

export default App;

import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Event from "./Event";
import Guest from "./Guest";

function Home() {
  return (
    <div>
      <br></br>
      <Switch>
        <Route path="/Event">
          <Event />
        </Route>
        <Route exact path="/Guest">
          <Guest />
        </Route>
      </Switch>

      <Link to="/Guest">Guest</Link>
      <span> </span>
      <Link to="/Event">Host</Link>
    </div>
  );
}

export default Home;

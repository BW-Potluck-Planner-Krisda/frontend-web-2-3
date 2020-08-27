import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Event from "./Event";
import Guest from "./Guest";

function Home() {
  return (
    <div>
      <h3>Are you the guest or the host?</h3>

      <br></br>

      <Switch>
        <Route path="/Event">
          <Event />
        </Route>
        <Route path="/Guest">
          <Guest />
        </Route>
      </Switch>
      <Link to="/Guest">Guest</Link>
      <Link to="/Event">Event</Link>
    </div>
  );
}

export default Home;

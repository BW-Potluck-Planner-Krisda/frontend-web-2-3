import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

//import styled from "styled-components";
import "./App.css";

// Components
import Login from "./component/Login";
import Registration from "./component/Registration";
import Home from "./component/Home";
import Navigation from "./component/Navigation";
import Event from "./component/Event";
import Search from "./component/Search";

const App = () => {
  const [data, SetData] = useState([]);

  return (
    <div className="App">
      <Navigation />

      <Route path="/registration">
        <Registration />
      </Route>

      <Route path="/Login">
        <Login />
      </Route>

      <Route path="/Event">
        <Event />
      </Route>

      <Route path="/Search">
        <Search />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
};

export default App;

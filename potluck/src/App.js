import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link, Switch } from "react-router-dom";

//import styled from "styled-components";
import "./App.css";

// Components
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Event from "./components/Event";
import Search from "./components/Search";
import Display from "./components/Display";
import PrivateRoute from './components/utils/PrivateRoute';
import AddEvent from './components/AddEvent';

const App = () => {

  return (
    // todo: Switch Version

    <div className="App">
      <div>
        <Navigation />
        
      </div>

      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>

        <PrivateRoute path="/Event">
          <Event />
        </PrivateRoute>

        <PrivateRoute path="/Search">
          <Search />
        </PrivateRoute>

        <PrivateRoute path='/addevent'>
          <AddEvent />
        </PrivateRoute>

        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default App;

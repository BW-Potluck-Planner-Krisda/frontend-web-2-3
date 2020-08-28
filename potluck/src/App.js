import React from "react";
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
      <Route path="/Login">
          <Login />
        </Route>
        <Route path="/">
          <Registration />
        </Route>
        

        <PrivateRoute exact path="/Event">
          <Event />
        </PrivateRoute>

        <PrivateRoute exact path="/Search">
          <Search />
        </PrivateRoute>

        <PrivateRoute exact path='/addevent'>
          <AddEvent />
        </PrivateRoute>

        <PrivateRoute exact path="/home">
          <Home />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default App;

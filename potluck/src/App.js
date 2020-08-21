import React from "react";
import "./App.css";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Event from "./components/Event";
import Search from "./components/Search";
import Display from "./components/Display";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Registration />
      <Login />
      <Home />
      <Search />
      <Event />
      <Display />
    </div>
  );
}

export default App;

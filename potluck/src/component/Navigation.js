import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  font-size: 2.1rem;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: darkRed;
  border: 2px solid black;
  h1 {
    color: white;
  }
  nav {
    a {
      margin-right: 60px;
      text-decoration: none;
      color: white;

      &:hover {
        color: black;
      }
    }
  }
`;

const Navigation = (props) => {
  //function goes here!

  return (
    <NavContainer>
      <div>
        <h1>Navigation</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Registration">Registration</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Search">Search</Link>
      </nav>
    </NavContainer>
  );
};

export default Navigation;

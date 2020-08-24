import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
//! I Need to make this more user-friendly
  width: 100%;
  height: 45px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #070707;
  border: 2px solid black;
  h1 {
    color: #EEEEEE;
    padding: 5%
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

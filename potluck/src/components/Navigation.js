import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  //! I need to make this more user-friendly
  width: 90%;
  font-size: 1rem;
  margin: auto;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #070707;
  border: 2px solid black;

  h1 {
    color: #eeeeee;
    padding: 5%;
  }
  nav {
    a {
      margin-right: 60px;
      text-decoration: none;
      color: white;

      &:hover {
        color: #b1e083;
      }
    }
  }
`;

const Navigation = (props) => {
  //function goes here!

  return (
    <NavContainer>
      <h1>POTLUCK PLANNER</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Search">Search</Link>
        <Link to="/Registration">Registration</Link>
        <Link to="/Login">Login</Link>
      </nav>
    </NavContainer>
  );
};

export default Navigation;

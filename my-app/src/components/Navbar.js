import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components for the navbar elements
const Nav = styled.nav`
  background-color: #46703b;
  padding: 13px;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const Li = styled.li`
  &:first-child {
    margin-right: 8px;
  }
  a {
    color: white; /* Set text color to white */
    text-decoration: none; /* Remove underline */
    font-weight: bold; /* Make the text bold */
    font-size: 18px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/home">Home</Link>
        </Li>

        <Li>
          <Link to="/Dashboard"></Link>
        </Li>
        <Li>
          <Link to="/Form"></Link>
        </Li>
        <Li>
          <Link to="/Exercise">Exercise</Link>
        </Li>
        <Li>
          <Link to="/Movie">Movie</Link>
        </Li>
        <Li>
          <Link to="/Login">Login</Link>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;

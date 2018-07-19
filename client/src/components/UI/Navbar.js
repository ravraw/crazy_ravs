import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  border: 1px solid red;
`;

const Navbar = props => {
  return <Nav>{props.children}</Nav>;
};
export default Navbar;

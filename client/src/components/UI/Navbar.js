import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 0 auto; //grow shrink basis
  align-items: center;
`;

const Navbar = props => {
  return (
    <Nav
      style={{
        justifyContent: `${props.justify}`,
        flexDirection: `${props.direction}`,
        alignContent: `${props.align}`
      }}
    >
      {props.children}
    </Nav>
  );
};
export default Navbar;

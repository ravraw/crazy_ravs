import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex: 1 1 auto; //grow shrink basis
`;

const Navbar = props => {
  return (
    <Nav
      style={{
        justifyContent: `${props.justify}`,
        flexDirection: `${props.direction}`,
        alignItems: `${props.align}`
      }}
    >
      {props.children}
    </Nav>
  );
};
export default Navbar;

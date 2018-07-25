import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  display: flex;
  /* display: grid; */
`;

const Navbar = props => {
  const style = {
    flexDirection: `${props.direction}`,
    justifyContent: `${props.justifyContent}`,
    alignItems: `${props.alignItems}`
  };

  return <Nav style={style}> {props.children}</Nav>;
};
export default Navbar;

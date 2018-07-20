import React, { Component } from "react";
import { Logo, Navbar, NavItem, WrappingDiv } from "../componentList";
import styled from "styled-components";

const Header = styled.header`
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default class extends Component {
  render() {
    return (
      <Header>
        <WrappingDiv width="75%" height="90%">
          <Logo />
        </WrappingDiv>
        <WrappingDiv width="25%" height="90%">
          <Navbar direction="row" justify="flex-end" align="center">
            <NavItem name="LOGIN" />
            <NavItem name="ORDERS" />
          </Navbar>
        </WrappingDiv>
      </Header>
    );
  }
}

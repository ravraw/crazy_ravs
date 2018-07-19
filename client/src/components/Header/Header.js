import React, { Component } from "react";
import { Logo, Navbar, NavItem } from "../componentList";
import styled from "styled-components";

const Header = styled.header`
  height: 10vh;
  display: flex;
`;

export default class extends Component {
  render() {
    return (
      <Header>
        <Logo />
        <Navbar>
          <NavItem name="LOGIN" />
          <NavItem name="CHECK ORDERS" />
        </Navbar>
      </Header>
    );
  }
}

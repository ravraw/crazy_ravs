import React, { Component } from "react";
import { Logo, Navbar, NavItem } from "../componentList";
import styled from "styled-components";

const Header = styled.header`
  /* border: 1px solid red; */
  /* grid-column: 1 / -1;
  grid-row: 1 / 2; */
  grid-area: head;

  /* display: flex;
  justify-content: center; */
  display: grid;
  grid-template-columns: minmax(220px, 3fr) minmax(100px, 1fr);
  box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
`;

export default class extends Component {
  render() {
    return (
      <Header>
        <Logo />
        <Navbar direction="row" justifyContent="flex-end" alignItems="center">
          <NavItem to="/Login" name="Login" iconName="" />
          <NavItem
            to="/checkout"
            name="Order"
            iconName="food-2"
            orderCount="10"
          />
        </Navbar>
      </Header>
    );
  }
}

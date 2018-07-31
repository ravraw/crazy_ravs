import React from "react";
import styled from "styled-components";
import { Navbar, NavItem } from "../componentList";
const SideBar = styled.aside`
  /* border: 1px solid red; */
  /* grid-column: 1 / span 2;
  grid-row: 2 / 3; */
  grid-area: side;
  display: grid;
  grid-template-columns: minmax(60px, 1fr);
`;

export default props => (
  <SideBar>
    <Navbar
      direction="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <NavItem to="/" name="Home" iconName="home" />
      <NavItem to="/builder" name="Builder" iconName="home" />
      <NavItem to="/burgers" name="Burgers" iconName="burger" />
      <NavItem to="/shakes" name="Shakes" iconName="food-and-restaurant" />
      <NavItem to="/sides" name="Sides" iconName="food" />
      <NavItem to="/combos" name="Combos" iconName="food-1" />
    </Navbar>
  </SideBar>
);

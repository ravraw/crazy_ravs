import React from "react";
import styled from "styled-components";
import {
  WrappingDiv,
  Sidebar,
  Navbar,
  NavItem,
  MainDisplay
} from "../componentList";
const Main = styled.main`
  height: 75vh;
  display: flex;
  overflow: scroll;
`;

export default () => {
  return (
    <Main>
      <WrappingDiv width="15%" height="100%">
        <Sidebar>
          <Navbar direction="column" justify="space-around" align="center">
            <NavItem name="Builder" iconName="burger" color=" #6b9f38" />
            <NavItem name="Burgers" iconName="comic" color="#63befb" />
            <NavItem
              name="Shakes"
              iconName="food-and-restaurant"
              color=" #f0614a"
            />
            <NavItem name="Sides" iconName="food" color=" #6b9f38" />
            <NavItem name="Combos" iconName="food-1" color=" #6b9f38" />
          </Navbar>
        </Sidebar>
      </WrappingDiv>
      <WrappingDiv height="100%">
        <MainDisplay />
      </WrappingDiv>
    </Main>
  );
};

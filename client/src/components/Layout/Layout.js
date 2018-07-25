/* eslint-disable max-len */

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import {
  Header,
  Sidebar,
  Main,
  Login,
  Footer,
  BurgerBuilder,
  Burgers,
  Shakes,
  Sides,
  Combos
} from "../componentList";

// Layout is a 12 col

const LayoutWrapper = styled.div`
  display: grid;
  /* grid-template: 100px 500px 100px / repeat(12, 1fr); */
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 20vh 75vh 5vh;
  grid-template-areas:
    "head head head head head head head head head head head head"
    "side side main main main main main main main main main main "
    "foot foot foot foot foot foot foot foot foot foot foot foot ";
`;

class Layout extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Header />
        <Sidebar />
        <Main>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/burgers" exact component={Burgers} />
            <Route path="/shakes" component={Shakes} />
            <Route path="/sides" component={Sides} />
            <Route path="/burgerbuilder" component={BurgerBuilder} />
            <Route path="/combos" component={Combos} />
          </Switch>
        </Main>
        <Footer />
      </LayoutWrapper>
    );
  }
}

export default Layout;

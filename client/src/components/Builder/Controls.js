import React from "react";
import styled from "styled-components";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  Navbar,
  NavItem,
  IngredientCard,
  Scroller,
  Buns,
  Sauce,
  Patty,
  Cheese,
  Salad,
  Pickle,
  Topping,
  Side
} from "../componentList";

import burger from "../../assets/images/burger.jpg";

const Contol = styled.div`
  grid-area: cont;
  border-right: 1px solid gray;

  font-family: "Bangers", cursive;
  color: #b00020;
  display: grid;
  grid-template-rows: 10% 10% 10% 10% 1fr;
  grid-template-columns: 100%;

  /* > * {
    border: 1px solid red;
  } */
`;

const Control = props => {
  console.log(props.match.url);
  return (
    <Contol>
      <h1>Build your burger in seconds...</h1>
      <h1>Build your burger in seconds...</h1>
      <Navbar
        direction="row"
        justifyContent="space-around"
        alignItems="flex-end"
      >
        <NavItem to="/builder/buns" name="Buns" iconName="" />
        <NavItem to={`${props.match.url}/sauce`} name="Sauce" iconName="" />
        <NavItem to={`${props.match.url}/patty`} name="Patty" iconName="" />
        <NavItem to={`${props.match.url}/cheese`} name="Cheese" iconName="" />
        <NavItem to={`${props.match.url}/salad`} name="Salad" iconName="" />
        <NavItem to={`${props.match.url}/pickle`} name="Pickle" iconName="" />
        <NavItem to={`${props.match.url}/topping`} name="Topping" iconName="" />
        <NavItem to={`${props.match.url}/side`} name="Side" iconName="" />
      </Navbar>
      <h2>Choose any 3 </h2>
      <Scroller>
        <Switch>
          <Route path="/builder/" exact render={() => <h1>Welcome</h1>} />
          <Route path="/builder/buns" exact component={Buns} />
          <Route path="/builder/sauce" exact component={Sauce} />
          <Route path="/builder/patty" exact component={Patty} />
          <Route path="/builder/cheese" exact component={Patty} />
          <Route path="/builder/salad" exact component={Salad} />
          <Route path="/builder/pickle" exact component={Patty} />
          <Route path="/builder/topping" exact component={Buns} />
          <Route path="/builder/side" exact component={Patty} />
        </Switch>
      </Scroller>
    </Contol>
  );
};

export default withRouter(Control);

import React from "react";
import styled from "styled-components";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  Navbar,
  NavItem,
  Scroller,
  Buns,
  Sauce,
  Patty,
  Cheese,
  Salad,
  Pickle,
  MeatTopping
} from "../componentList";

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
      </Navbar>
      <h2>Choose any 3 </h2>
      <Scroller>
        <Switch>
          <Route path="/builder/" exact render={() => <h1>Welcome</h1>} />
          <Route
            path="/builder/buns"
            exact
            render={() => <Buns bun={props.bun} />}
          />
          <Route
            path="/builder/sauce"
            exact
            render={() => <Sauce sauce={props.sauce} />}
          />
          <Route
            path="/builder/patty"
            exact
            render={() => <Patty patty={props.patty} />}
          />
          <Route
            path="/builder/cheese"
            exact
            render={() => <Cheese cheese={props.cheese} />}
          />
          <Route
            path="/builder/salad"
            exact
            render={() => <Salad salad={props.salad} />}
          />
          <Route
            path="/builder/pickle"
            exact
            render={() => <Pickle pickle={props.pickle} />}
          />
          <Route
            path="/builder/topping"
            exact
            render={() => <MeatTopping meat_topping={props.meat_topping} />}
          />
        </Switch>
      </Scroller>
    </Contol>
  );
};

export default withRouter(Control);

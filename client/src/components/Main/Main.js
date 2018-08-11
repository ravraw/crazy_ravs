import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import {
  Signin,
  Builder,
  Burgers,
  Shakes,
  Sides,
  Combos
} from "../componentList";
const Main = styled.main`
  height: 100%;
  width: 100%;
  grid-area: main;
  padding: 15px;
  display: grid;
  grid-template-columns: minmax(200px, auto);
  position: relative;
  overflow: scroll;
`;

export default props => {
  return (
    <Main>
      <Switch>
        <Route path="/" exact render={() => <h1>Welcome</h1>} />
        <Route path="/signin" component={Signin} />
        <Route
          path="/burgers"
          render={() => <Burgers burgers={props.menu.burger} />}
        />
        <Route
          path="/shakes"
          render={() => <Shakes shakes={props.menu.shake} />}
        />
        <Route path="/sides" render={() => <Sides sides={props.menu.side} />} />
        <Route
          path="/builder"
          render={() => (
            <Builder
              bun={props.menu.bun}
              sauce={props.menu.sauce}
              patty={props.menu.patty}
              cheese={props.menu.cheese}
              salad={props.menu.salad}
              pickle={props.menu.pickle}
              meat_topping={props.menu.meat_topping}
            />
          )}
        />
        <Route
          path="/combos"
          render={() => <Combos combos={props.menu.combo} />}
        />
      </Switch>
    </Main>
  );
};

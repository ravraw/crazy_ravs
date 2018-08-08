/* eslint-disable max-len */

import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../../Store/Actions";

import {
  Header,
  Sidebar,
  Main,
  Signin,
  Footer,
  Builder,
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
  state = { menu: "" };

  componentDidMount() {
    this.props.onLoadMenu();
    this.setState({
      ...this.state,
      menu: this.props.loadedMenu
    });
  }

  render() {
    return (
      <LayoutWrapper>
        <Header />
        <Sidebar />
        <Main>
          <Switch>
            <Route path="/" exact render={() => <h1>Welcome</h1>} />
            <Route path="/signin" component={Signin} />
            <Route path="/burgers" component={Burgers} />
            <Route path="/shakes" component={Shakes} />
            <Route path="/sides" component={Sides} />
            <Route path="/builder" component={Builder} />
            <Route path="/combos" component={Combos} />
          </Switch>
        </Main>
        <Footer />
      </LayoutWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadedMenu: state.loadMenu.menu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadMenu: () => dispatch(actions.loadMenu())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
);

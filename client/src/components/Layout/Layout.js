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
  state = {
    menu: "",
    burger: "",
    shakes: ""
  };
  componentDidMount() {
    this.props.onLoadMenu();
  }
  changeState = () => {
    this.setState({
      ...this.state,
      menu: [...this.props.loadedMenu]
    });
  };

  render() {
    let burgers,
      shakes,
      sides,
      builder,
      combos,
      bun,
      sauce,
      patty,
      cheese,
      salad,
      pickle,
      meat_topping;
    if (this.props.loadedMenu) {
      burgers = this.props.loadedMenu.filter(
        el => el.menu_section === "burger"
      );
      shakes = this.props.loadedMenu.filter(el => el.menu_section === "shake");
      sides = this.props.loadedMenu.filter(el => el.menu_section === "side");
      combos = this.props.loadedMenu.filter(el => el.menu_section === "combo");
      bun = this.props.loadedMenu.filter(el => el.menu_section === "bun");
      sauce = this.props.loadedMenu.filter(el => el.menu_section === "sauce");
      patty = this.props.loadedMenu.filter(el => el.menu_section === "patty");
      cheese = this.props.loadedMenu.filter(el => el.menu_section === "cheese");
      salad = this.props.loadedMenu.filter(el => el.menu_section === "salad");
      pickle = this.props.loadedMenu.filter(el => el.menu_section === "pickle");
      meat_topping = this.props.loadedMenu.filter(
        el => el.menu_section === "meat_topping"
      );
    }
    console.log(burgers, shakes, sides, builder, combos);
    return (
      <LayoutWrapper>
        <Header />
        <Sidebar />
        <Main>
          <Switch>
            <Route path="/" exact render={() => <h1>Welcome</h1>} />
            <Route path="/signin" component={Signin} />
            <Route
              path="/burgers"
              render={() => <Burgers burgers={burgers} />}
            />
            <Route path="/shakes" render={() => <Shakes shakes={shakes} />} />
            <Route path="/sides" render={() => <Sides sides={sides} />} />
            <Route
              path="/builder"
              render={() => (
                <Builder
                  bun={bun}
                  sauce={sauce}
                  patty={patty}
                  cheese={cheese}
                  salad={salad}
                  pickle={pickle}
                  meat_topping={meat_topping}
                />
              )}
            />
            <Route path="/combos" render={() => <Combos combos={combos} />} />
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

/* eslint-disable max-len */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../../Store/Actions";

import { Header, Sidebar, Main, Footer } from "../componentList";

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
  componentDidMount() {
    this.props.onLoadMenu();
  }

  render() {
    const menu = {};

    if (this.props.loadedMenu) {
      this.props.loadedMenu.forEach(el => {
        if (!menu[el.menu_section]) {
          menu[el.menu_section] = [];
        } else {
          menu[el.menu_section].push(el);
        }
      });
    }
    console.log(menu);
    return (
      <LayoutWrapper>
        <Header />
        <Sidebar />
        <Main menu={menu} />
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

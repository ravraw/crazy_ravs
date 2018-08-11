import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./Store/Actions";

import { Layout } from "./components/componentList";
import "./index.css";

class App extends Component {
  componentDidMount() {
    this.props.onLoadMenu();
  }
  render() {
    return <Layout menu={this.props.loadedMenu} />;
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
  )(App)
);

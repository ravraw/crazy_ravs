import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./Store/Actions";

import { Layout, Modal } from "./components/componentList";
import "./index.css";

class App extends Component {
  componentDidMount() {
    this.props.onLoadMenu();
  }
  render() {
    return (
      <React.Fragment>
        <Layout menu={this.props.loadedMenu} />
      </React.Fragment>
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
  )(App)
);

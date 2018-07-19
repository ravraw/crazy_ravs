/* eslint-disable max-len */

import React, { Component } from "react";

import { Header, Main, Footer } from "../componentList";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <hr />
        <Main />
        <hr />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;

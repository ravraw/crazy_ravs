/* eslint-disable max-len */

import React, { Component } from "react";

import {
  Header,
  Main,
  Footer,
  Overlay,
  SignIn,
  SignUp
} from "../componentList";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Overlay />
        <SignUp /> */}
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

/* eslint-disable max-len */

import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
import styled from "styled-components";
// import * as actions from "../../Store/Actions";

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
  render(props) {
    return (
      <LayoutWrapper>
        <Header />
        <Sidebar />
        <Main menu={this.props.menu} />
        <Footer />
      </LayoutWrapper>
    );
  }
}

export default Layout;

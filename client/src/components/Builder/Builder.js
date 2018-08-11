import React, { Component } from "react";
import styled from "styled-components";

import { Controls, Burger, OrderSummary } from "../componentList";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "cont cont cont cont cont cont cont cont cont ordr ordr ordr"
    "cont cont cont cont cont cont cont cont cont ordr ordr ordr"
    "cont cont cont cont cont cont cont cont cont burg burg burg"
    "cont cont cont cont cont cont cont cont cont burg burg burg"
    "cont cont cont cont cont cont cont cont cont burg burg burg"
    "cont cont cont cont cont cont cont cont cont burg burg burg";
`;

export default class Builder extends Component {
  render() {
    return (
      <Container>
        <Controls {...this.props} />
        <Burger />
        <OrderSummary />
      </Container>
    );
  }
}

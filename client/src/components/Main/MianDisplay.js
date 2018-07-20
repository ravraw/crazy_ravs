import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "../componentList";
const Div = styled.div`
  display: flex;
  padding: 10px;
  margin: 20px;
  border: 1px solid red;
  background: lightblue;
`;

const MainDisplay = class MianDisplay extends Component {
  render() {
    return (
      <Div>
        <Card />
      </Div>
    );
  }
};
export default MainDisplay;

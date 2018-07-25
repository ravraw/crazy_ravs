import React, { Component } from "react";
import styled from "styled-components";

const Footer = styled.footer`
  /* border: 1px solid red; */
  /* grid-column: 1/-1;
  grid-row: 3/-1; */
  grid-area: foot;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bangers", cursive;
  font-size: 1.3em;
  color: gray;
  box-shadow: 0 -3px 5px 0px rgba(0, 0, 0, 0.3);
  margin-top: 15px;

  > p {
    text-align: center;
  }
`;

export default class extends Component {
  render() {
    return (
      <Footer>
        <p>&copy;2018 Crazy Rav's all rights reserved.</p>
      </Footer>
    );
  }
}

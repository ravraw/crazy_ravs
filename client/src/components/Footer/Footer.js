import React, { Component } from "react";
import styled from "styled-components";

const Footer = styled.footer`
  height: 5vh;
  color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Bangers", cursive;
  font-size: 1.3em;
  /* background: tomato; */
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.5);
`;

export default class extends Component {
  render() {
    return (
      <Footer>
        <p>&copy;2018 CRAZY RAV'S ALL RIGHTS RESERVED</p>
      </Footer>
    );
  }
}

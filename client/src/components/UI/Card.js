import React from "react";
import styled from "styled-components";

import { WrappingDiv, QuantityCounter, Button } from "../componentList";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background: lightgreen;
  flex: 1 1 auto; //grow shrink basis
  width: 100%;
  border: 1px solid black;

  > img {
    width: 100%;
    height: auto;
  }
  > h1 {
    font-family: "Bangers", cursive;
    font-size: 1.5em;
    margin: 5px auto;
  }
  > p {
    margin: 5px auto;
  }
  > button {
    width: 80%;
    height: 25px;
    border-radius: 50px;

    margin: 10px auto;
    background: yellow;
  }
`;

const Card = props => {
  return (
    <WrappingDiv maxWidth="225px" height="auto" minWidth="200px">
      <Div>
        <img src={props.image} alt="food" />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <QuantityCounter />
        <Button name="ADD TO ORDER" />
      </Div>
    </WrappingDiv>
  );
};

export default Card;

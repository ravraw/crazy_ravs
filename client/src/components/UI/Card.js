import React from "react";
import styled from "styled-components";

import { QuantityCounter, Button } from "../componentList";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  flex: 1 1 auto; //grow shrink basis
  width: 100%;
  padding: 10px;
  margin: auto;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.3);

  > img {
    width: 100%;
    height: auto;
    border-radius: 5px;
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
    cursor: pointer;
    margin: 10px auto;
    background: tomato;
    color: white;
  }
`;

const Card = props => {
  return (
    <Div>
      <img src={props.image} alt="food" />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <QuantityCounter />
      <Button name="ADD TO ORDER" />
    </Div>
    // </WrappingDiv>
  );
};

export default Card;

import React from "react";
import styled from "styled-components";
import burger from "../../assets/images/burger.jpg";
import WrappingDiv from "./wrappingDiv";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  width: 100%;

  > * {
    margin: 5px;
  }

  > img {
    width: 100%;
    height: auto;
  }
  > h1 {
    font-family: "Bangers", cursive;
    font-size: 1.5em;
  }
  > p {
  }
  > div {
    display: flex;
    justify-content: center;
  }
  > span {
  }
  > button {
    width: 80%;
    height: 20px;
    border-radius: 50px;
    padding: 10px auto;
  }
`;

const Card = props => {
  return (
    <WrappingDiv width="250px" height="auto">
      <Div>
        <img src={burger} alt="food" />
        <h1>Big Bang Burger</h1>
        <p>
          explicabo eligendi eius eos pariatur expedita dolor ut! Odio eum
          quaerat sequi at ipsa facilis illo quae quis quod?Velit dolorem neque
          doloremque voluptates pariatur?
        </p>
        <div>
          <span>LESS</span>
          <span>1</span>
          <span>More</span>
        </div>
        <button>ADD</button>
      </Div>
    </WrappingDiv>
  );
};

export default Card;

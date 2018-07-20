import React from "react";
import styled from "styled-components";
const Counter = styled.div`
  font-size: 12px;
  margin: 5px;
  > span {
    width: 20px;
    height: 20px;
    padding: 5px 5px;
    border: 1px solid gray;
  }
  > #span1 {
    background: tomato;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
  }
  > #span2 {
    background: white;
  }
  > #span3 {
    background: lightgreen;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
  }
`;

export default () => {
  return (
    <Counter>
      <span id="span1">LESS</span>
      <span id="span2">1</span>
      <span id="span3">MORE</span>
    </Counter>
  );
};

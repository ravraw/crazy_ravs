import React from "react";
import styled from "styled-components";
const Button = styled.button`
  width: max-content;
  height: 25px;
  font-size: 1em;
  border-radius: 50px;
  padding: 10px auto;
  /* margin: 10px auto; */
  background: tomato;
  color: white;

  :hover {
    background: green;
  }
`;
export default props => {
  return <Button>{props.name}</Button>;
};

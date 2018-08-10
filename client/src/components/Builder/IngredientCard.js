import React from "react";
import styled from "styled-components";
import burger from "../../assets/images/burger.jpg";
const Card = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  > * {
    margin: 10px 10px;
  }
  > button {
    width: 3rem;
    height: 1.5rem;

    :hover {
      background: green;
      cursor: pointer;
    }
  }
`;

export default props => {
  return (
    <Card>
      <img src={props.image} alt={props.image} height="100px" />
      <p>{props.name}</p>
      <button>ADD</button>
    </Card>
  );
};

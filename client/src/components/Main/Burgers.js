import React from "react";
import styled from "styled-components";
import { Card } from "../componentList";
import burger from "../../assets/images/burger.jpg";
const Div = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 25px;
`;

export default props => {
  const burgerList = props.burgers.map(el => (
    <Card item={el} image={burger} key={el.id} />
  ));
  return <Div>{burgerList}</Div>;
};

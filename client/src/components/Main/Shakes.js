import React from "react";
import styled from "styled-components";
import { Card } from "../componentList";
import shake from "../../assets/images/shake.jpg";
const Div = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 25px;
`;

export default props => {
  const shakeList = props.shakes.map(el => (
    <Card item={el} image={shake} key={el.id} />
  ));
  return <Div>{shakeList}</Div>;
};

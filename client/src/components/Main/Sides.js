import React from "react";
import styled from "styled-components";
import { Card } from "../componentList";
import side from "../../assets/images/side.png";
const Div = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 25px;
`;

export default props => {
  const sideList = props.sides.map(el => (
    <Card item={el} image={side} key={el.id} />
  ));
  return <Div>{sideList}</Div>;
};

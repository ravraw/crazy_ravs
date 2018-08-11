import React from "react";
import styled from "styled-components";
import { Card } from "../componentList";
import combo from "../../assets/images/combo.png";
const Div = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 25px;
`;

export default props => {
  const comboList = props.combos.map(el => (
    <Card
      name={el.name}
      description={el.description}
      image={combo}
      key={el.id}
    />
  ));
  return <Div>{comboList}</Div>;
};

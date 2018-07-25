import React from "react";
import styled from "styled-components";
import {} from "../componentList";
const Main = styled.main`
  /* border: 1px solid red; */
  /* grid-column: 3 /-1;
  grid-row: 2 / 3; */
  grid-area: main;
  padding: 15px;
  display: grid;
  grid-template-columns: minmax(200px, auto);
  overflow: scroll;
  position: relative;
`;

export default props => {
  return <Main>{props.children}</Main>;
};

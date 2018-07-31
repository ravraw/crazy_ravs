import React from "react";
import styled from "styled-components";
import {} from "../componentList";
const Main = styled.main`
  height: 100%;
  width: 100%;
  grid-area: main;
  padding: 15px;
  display: grid;
  grid-template-columns: minmax(200px, auto);
  position: relative;
  overflow: scroll;
`;

export default props => {
  return <Main>{props.children}</Main>;
};

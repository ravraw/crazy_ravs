import React from "react";
import styled from "styled-components";
const SideBar = styled.aside`
  width: 100%;
  height: 100%;
  min-width: 100px;
  display: flex;
  flex-direction: column;
`;

export default props => <SideBar>{props.children}</SideBar>;

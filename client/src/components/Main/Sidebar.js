import React from "react";
import styled from "styled-components";
const SideBar = styled.aside`
  width: 100%;
  height: 100%;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid gray;
`;

export default props => <SideBar>{props.children}</SideBar>;

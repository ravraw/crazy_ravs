import React from "react";
import styled from "styled-components";
const WrappingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default props => {
  return (
    <WrappingDiv style={{ width: `${props.width}`, height: `${props.height}` }}>
      {props.children}
    </WrappingDiv>
  );
};

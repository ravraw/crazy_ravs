import React from "react";
import styled from "styled-components";
const WrappingDiv = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  position: relative;
`;

export default props => {
  return (
    <WrappingDiv
      style={{
        maxWidth: `${props.maxWidth}`,
        height: `${props.height}`,
        minWidth: `${props.minWidth}`
      }}
    >
      {props.children}
    </WrappingDiv>
  );
};

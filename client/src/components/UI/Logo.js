import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

const Div = styled.div`
  height: 100%;

  > img{
    
    height:100%;
  }
 
  }
`;

export default () => {
  return (
    <Div>
      <img src={logo} alt="logo - Crazy Rav's" />
    </Div>
  );
};

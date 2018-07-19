import React from "react";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  flex: direction;
  color: red;
  height: 100%;
  border: 1px solid red;
`;

const NavItem = props => {
  return (
    <Div>
      {props ? (
        <svg>
          <use xlinkHref={`images/sprite.svg#${props.iconName}`} />
        </svg>
      ) : null}

      <p>{props.name}</p>
    </Div>
  );
};

export default NavItem;

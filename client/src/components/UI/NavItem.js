import React from "react";
import styled from "styled-components";

const Div = styled.div`
  /* border: solid black;
  border-width: 3px 3px 2px 0px;
  border-radius: 90% 4% 92% 0%/4% 95% 6%; */
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1 1 auto; //grow shrink basis
  align-items: center;
  padding: 10px;

  font-family: "Bangers", cursive;
  font-size: 1.5em;
  cursor: pointer;
  transition: 0.25s;
  > svg {
    width: 80px;
    height: 80px;
    /* border: 1px solid red; */
    margin-bottom: 10px;
  }
  :hover {
    /* color: #b00020; */
    color: #c93d1b;
    fill: #c93d1b;
    transform: scale(1.1);
    width: 110%;
  }
`;

const NavItem = props => {
  return (
    <Div style={{ background: `${props.color}` }}>
      {props.iconName ? (
        <svg>
          <use xlinkHref={`svg/sprite.svg#${props.iconName}`} />
        </svg>
      ) : null}

      <p>{props.name}</p>
    </Div>
  );
};

export default NavItem;

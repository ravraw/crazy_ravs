import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavItem = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > * {
    text-decoration: none;
    color: gray;
    fill: gray;
  }

  font-family: "Bangers", cursive;
  font-size: 2em;
  cursor: pointer;
  transition: 0.25s;
  > svg {
    width: 80px;
    height: 80px;
    /* border: 1px solid red; */
    margin-bottom: 10px;
  }
  > :hover {
    /* color: #b00020; */
    color: #c93d1b;
    fill: #c93d1b;
    transform: translateY(-5px) scale(1.1);
  }
`;

export default props => {
  return (
    <NavItem>
      <NavLink to={props.to}>
        {props.iconName ? (
          <svg width="50px" height="50px">
            <use xlinkHref={`svg/sprite.svg#${props.iconName}`} />
          </svg>
        ) : null}
        <p>{props.name}</p>
      </NavLink>
    </NavItem>
  );
};

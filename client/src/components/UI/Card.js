import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions";

import { QuantityCounter, Button } from "../componentList";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  flex: 1 1 auto; //grow shrink basis
  width: 100%;
  padding: 10px;
  margin: auto;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.3);

  > img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  > h1 {
    font-family: "Bangers", cursive;
    font-size: 1.5em;
    margin: 5px auto;
  }
  > p {
    margin: 5px auto;
  }
  > button {
    width: 80%;
    height: 25px;
    border-radius: 50px;
    cursor: pointer;
    margin: 10px auto;
    background: tomato;
    color: white;
  }
`;

const Card = props => {
  const onClick = () => {
    let qty = document.querySelector("#span2").textContent;
    let item = { ...props.item, quantity: +qty };
    // send different actions for burger and burgerbuilder add items
    console.log(props.location.pathname.search(/builder/i) > -1);
    props.location.pathname.search(/builder/i) > -1
      ? props.addIngredient(item)
      : props.addItem(item);
  };
  return (
    <Div>
      <img src={props.image} alt="food" />
      <h1>{props.item.name}</h1>
      <p>{props.item.description}</p>
      <QuantityCounter />
      <Button name="ADD TO ORDER" onClick={onClick} />
    </Div>
  );
};

const mapStateToProps = state => {
  return {
    loadedMenu: state.loadMenu.menu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(actions.addItem(item)),
    addIngredient: item => dispatch(actions.addIngredient(item))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Card)
);

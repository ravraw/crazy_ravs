import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { BurgerIngredient } from "../componentList";
import * as actions from "../../Store/Actions";
const Div = styled.div`
  grid-area: burg;
`;

const Burger = props => {
  const burger = props.build;
  const ing = Object.keys(burger);
  let items = [];
  ing.forEach(el => {
    if (burger[el].length && el !== "bun") {
      for (let i = 0; i < burger[el].length; i++) {
        items.push(<BurgerIngredient type={el} key={el + i} />);
      }
    }
  });
  console.log(items);
  return (
    <Div>
      <BurgerIngredient type="bread-top" />
      {items}
      <BurgerIngredient type="bread-bottom" />
    </Div>
  );
};

const mapStateToProps = state => {
  return {
    build: state.burgerBuilder
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
  )(Burger)
);

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions";
import { Button } from "../componentList";
const Summary = styled.div`
  border-bottom: 1px solid gray;
  grid-area: ordr;
  text-align: center;
`;

const OrderSummary = props => {
  // burger details recieved from reducer
  const burger = props.build;
  // array to save final order summary
  const summery = [];
  //loop through keys of burger
  for (let k in burger) {
    // detail will hold items of same type
    let detail = "";
    // if value for the key has any ingredient in it --
    if (burger[k].length) {
      let summ = [];

      for (let i = 0; i < burger[k].length; i++) {
        summ.push(`${burger[k][i].name}(${burger[k][i].quantity})`);
      }
      summ.unshift(`${k}(${summ.length}):`);
      // add selected items to detail
      detail = detail.concat(summ.join(""));
      summery.push(<p key={`${k}`}>{detail}</p>);
    }
  }

  return (
    <Summary>
      <p>Build Ur burger</p>
      <ul>{summery}</ul>
      <p>Quantity : 1</p>
      <p>Total Price : $10</p>
      <Button name="ADD TO ORDER" />
    </Summary>
  );
};

const mapStateToProps = state => {
  return {
    build: state.burgerBuilder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadMenu: () => dispatch(actions.loadMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummary);

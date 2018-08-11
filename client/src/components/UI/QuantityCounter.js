import React, { Component } from "react";
import styled from "styled-components";
const Counter = styled.div`
  font-size: 12px;
  margin: 5px;
  > span {
    width: 20px;
    height: 20px;
    padding: 3px 5px;
    border: 1px solid gray;
  }
  > #span1 {
    background: tomato;
    /* border-top-left-radius: 10px;
    border-bottom-left-radius: 10px; */
    cursor: pointer;
  }
  > #span2 {
    background: white;
  }
  > #span3 {
    background: lightgreen;
    /* border-top-right-radius: 10px;
    border-bottom-right-radius: 10px; */
    cursor: pointer;
  }
`;

export default class QuantityCounter extends Component {
  state = {
    qty: 1
  };

  onLess = () => {
    if (this.state.qty > 0) {
      this.setState(prevState => {
        return { qty: prevState.qty - 1 };
      });
    }
  };
  onMore = () => {
    if (this.state.qty >= 0) {
      this.setState(prevState => {
        return { qty: prevState.qty + 1 };
      });
    }
  };
  render() {
    return (
      <Counter>
        <span id="span1" onClick={this.onLess}>
          LESS
        </span>
        <span id="span2">{this.state.qty}</span>
        <span id="span3" onClick={this.onMore}>
          MORE
        </span>
      </Counter>
    );
  }
}

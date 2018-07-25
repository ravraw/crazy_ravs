import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Overlay } from "../componentList";
import * as actions from "../../Store/Actions";

const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;

  width: 450px;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  > input,
  label {
    width: 70%;
    margin: 1px;
    font-size: 1.2em;
  }
  > input {
    height: 7%;
    background: lightgray;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 1.2em;
    color: white;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div button {
    width: 25%;
    height: 50%;
    background: white;
    border-color: lightgray;
    border-radius: 5px;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.3);
    font-size: 1em;
    cursor: pointer;
    margin: 10px;
    :hover {
      background: #bc581e;
    }
  }
`;

const BreadTop = styled.div`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`;
const BreadBottom = styled.div`
  height: 13%;
  width: 80%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`;

const Seeds1 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 30%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9c9c9;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -170%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;
  }
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 180%;
    top: -50%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px #c9c9c9;
  }
`;

const Seeds2 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 64%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(10deg);
  box-shadow: inset -3px 0 #c9c9c9;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 150%;
    top: -130%;
    border-radius: 40%;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px #c9c9c9;
  }
  }
`;

class Login extends Component {
  state = {
    login: true,
    username: "",
    email: "",
    password: ""
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.setState({ login: false });
    this.props.onLogin(this.state.email, this.state.password);
  };

  onSignupHandler = e => {
    e.preventDefault();
    this.setState({ login: !this.state.login });
  };

  render() {
    return (
      <Overlay>
        <Form onSubmit={this.onSubmitHandler}>
          <BreadTop>
            <Seeds1 />
            <Seeds2 />
          </BreadTop>
          {this.state.login ? null : (
            <React.Fragment>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                style={{ background: " #d6bb22" }}
                value={this.state.username}
                onChange={this.onChangeHandler}
              />
            </React.Fragment>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            style={{ background: " #702e05" }}
            value={this.state.email}
            onChange={this.onChangeHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            style={{ background: " #228c1d" }}
            value={this.state.password}
            onChange={this.onChangeHandler}
          />
          <BreadBottom>
            <button onClick={this.onSubmitHandler}>SUBMIT</button>
            <button onClick={this.onSignupHandler}>
              {this.state.login ? "SIGN-UP ?" : "SIGN-IN ?"}
            </button>
          </BreadBottom>
        </Form>
      </Overlay>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.login.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(actions.login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

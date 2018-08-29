import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Div = styled.div`
  position: fixed; /* Sit on top of the page content */
  display: block; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
`;

const ModalRoot = documnt.getElementById("modal-root");

class Modal extends Component {
  state = {
    show: false
  };

  toggleModal = () =>
    this.setState(prevState => ({
      ...prevState,
      show: !prevState.show
    }));

  componentDidMount() {
    ModalRoot.appendChild(Div);
  }
  componentWillUnmount() {
    ModalRoot.removeChild(Div);
  }
  render(props) {
    return ReactDOM.createPortal(this.props.children, Div);
  }
}

export default Modal;

import React from "react";
import styled from "styled-components";
import { NavItem, Button } from "../componentList";
const SignIn = styled.div`
  width: 300px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: linear-gradient(to right, lightyellow, lightgreen);
  > .o-auth {
    border: red 1px soild;
    display: flex;
    height: 100px;
  }
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
  }
`;

export default () => {
  return (
    //   <Overlay/>
    <SignIn>
      <label htmlFor="">Sign in with</label>

      <div className="o-auth">
        <NavItem name="facebook" iconName="facebook" color="transparent" />
        <NavItem name="google" iconName="google-1" color="transparent" />
      </div>

      <form>
        <label htmlFor=""> Username</label>
        <br />
        <input type="email" />
        <br />
        <label htmlFor=""> Password</label>
        <br />
        <input type="password" />
        <br />
        <Button name="----Sign-in-----" />
        <p>
          Not a member ? <a href="">Sign up now</a>
        </p>
      </form>
    </SignIn>
  );
};

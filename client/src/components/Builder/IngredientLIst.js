import React from "react";
import { IngredientCard } from "../componentList";
import bunImg from "../../assets/images/bun.png";
import sauceImg from "../../assets/images/sauce.png";
import pattyImg from "../../assets/images/patty.jpg";
import cheeseImg from "../../assets/images/cheese.jpg";
import saladImg from "../../assets/images/onionSlice.png";
import pickleImg from "../../assets/images/pickle.jpg";
import meat_toppingImg from "../../assets/images/meat_topping.png";

export const Buns = props => {
  const buns = props.bun.map(el => (
    <IngredientCard name={el.name} image={bunImg} />
  ));
  return <React.Fragment>{buns}}</React.Fragment>;
};
export const Sauce = props => {
  const sauce = props.sauce.map(el => (
    <IngredientCard name={el.name} image={sauceImg} />
  ));
  return <React.Fragment>{sauce}}</React.Fragment>;
};
export const Patty = props => {
  const patty = props.patty.map(el => (
    <IngredientCard name={el.name} image={pattyImg} />
  ));
  return <React.Fragment>{patty}}</React.Fragment>;
};

export const Cheese = props => {
  const cheese = props.cheese.map(el => (
    <IngredientCard name={el.name} image={cheeseImg} />
  ));
  return <React.Fragment>{cheese}}</React.Fragment>;
};

export const Salad = props => {
  const salad = props.salad.map(el => (
    <IngredientCard name={el.name} image={saladImg} />
  ));
  return <React.Fragment>{salad}}</React.Fragment>;
};

export const Pickle = props => {
  const pickle = props.pickle.map(el => (
    <IngredientCard name={el.name} image={pickleImg} />
  ));
  return <React.Fragment>{pickle}}</React.Fragment>;
};

export const MeatTopping = props => {
  const meatTopping = props.meat_topping.map(el => (
    <IngredientCard name={el.name} image={meat_toppingImg} />
  ));
  return <React.Fragment>{meatTopping}}</React.Fragment>;
};

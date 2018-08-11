import React from "react";
import { IngredientCard, Card } from "../componentList";
import bunImg from "../../assets/images/bun.png";
import sauceImg from "../../assets/images/sauce.png";
import pattyImg from "../../assets/images/patty.jpg";
import cheeseImg from "../../assets/images/cheese.jpg";
import saladImg from "../../assets/images/onionSlice.png";
import pickleImg from "../../assets/images/pickle.jpg";
import meat_toppingImg from "../../assets/images/meat_topping.png";

export const Buns = props => {
  const buns = props.bun.map(el => (
    // <IngredientCard name={el.name} image={bunImg} key={el.id} />
    <Card item={el} image={bunImg} key={el.id} />
  ));
  return <React.Fragment>{buns}}</React.Fragment>;
};
export const Sauce = props => {
  const sauce = props.sauce.map(el => (
    // <IngredientCard name={el.name} image={sauceImg} key={el.id} />
    <Card item={el} image={sauceImg} key={el.id} />
  ));
  return <React.Fragment>{sauce}}</React.Fragment>;
};
export const Patty = props => {
  const patty = props.patty.map(el => (
    // <IngredientCard name={el.name} image={pattyImg} key={el.id} />
    <Card item={el} image={pattyImg} key={el.id} />
  ));
  return <React.Fragment>{patty}}</React.Fragment>;
};

export const Cheese = props => {
  const cheese = props.cheese.map(el => (
    // <IngredientCard name={el.name} image={cheeseImg} key={el.id} />
    <Card item={el} image={cheeseImg} key={el.id} />
  ));
  return <React.Fragment>{cheese}}</React.Fragment>;
};

export const Salad = props => {
  const salad = props.salad.map(el => (
    // <IngredientCard name={el.name} image={saladImg} key={el.id} />
    <Card item={el} image={saladImg} key={el.id} />
  ));
  return <React.Fragment>{salad}}</React.Fragment>;
};

export const Pickle = props => {
  const pickle = props.pickle.map(el => (
    // <IngredientCard name={el.name} image={pickleImg} key={el.id} />
    <Card item={el} image={pickleImg} key={el.id} />
  ));
  return <React.Fragment>{pickle}}</React.Fragment>;
};

export const MeatTopping = props => {
  const meatTopping = props.meat_topping.map(el => (
    // <IngredientCard name={el.name} image={meat_toppingImg} key={el.id} />
    <Card item={el} image={meat_toppingImg} key={el.id} />
  ));
  return <React.Fragment>{meatTopping}}</React.Fragment>;
};

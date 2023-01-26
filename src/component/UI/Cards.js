import "./cards.css";
import React from "react";
const Cards = (props)=>{
  const classes="card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Cards;
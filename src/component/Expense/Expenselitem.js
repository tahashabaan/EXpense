import React from "react";
import Cards from "../UI/Cards.js";
import ExpendelitemData from "./ExpenselitemData"; 
import "./ExpenselItem.css";



 const Expendelitem = (props) => {

   return (
      <Cards className="expnse-item">
        <ExpendelitemData data={props.data}/>
        <div className="expnse-item__des">
          <h2> {props.title} </h2>
          <div>${props.amount}</div>
        </div> 
      </Cards>
      ); 

    }
    
  export default Expendelitem;
import React from "react";

import "./ExpenselItem.css";
import "./ExpenselitemData.css";



const ExpendelitemData=(props) => {

   const menth=props.data.toLocaleString("en-US" ,{month:"long"});
   const day=props.data.toLocaleString("en-US" ,{day:'2-digit'});
   const year=props.data.getFullYear();


  return (

    <div className="expnse-item__data">
      <div className="expnse-itme__day">{day}</div>
      <div className="expnse-item__month">{menth}</div>
      <div className="expnse-item__year">{year}</div>
    </div>

  );

}
  export default ExpendelitemData;
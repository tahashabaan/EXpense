import React , { useState } from "react";
import Cards from "../UI/Cards.js";
import ExpenseFilter from "./ExpenseFilter";
import Expendelitem from "./Expenselitem.js";
import "./Expense.css";
import "./ExpenselItem.css";



const Expense = (props) => {
   
     
  const [filterYear, setFilterYear] =useState('2020');
  const selectYear = (year) => { setFilterYear(year) }

   const dataExp = props.data.filter( 
      date=> date.data.getFullYear().toString() === filterYear)

  return (

     <Cards className='expense'>
       <ExpenseFilter selected={filterYear} 
                 onSelectYear={selectYear}/>

      {dataExp.map( expense => 
       <Expendelitem 
          title={expense.title} data={expense.data}
          amount={expense.amount}/>)}

      {dataExp.length === 0 && <p className="error">No Expense Items</p>}

   </Cards>

      )
  }
  
     
     

export default Expense;
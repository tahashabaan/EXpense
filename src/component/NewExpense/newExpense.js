import React, { useState } from "react";
import NewEXpenseForm from "./NewExpenseForm.js"
import "./NewExpense.css";

const NewEXpense = (props) =>{
    
  const [newExpense, setNewExpense] = useState(false);

  const onOpenExpenseHandler = () => {
    setNewExpense(true)
  }
  const onCloseExpenseHandler = () => {
    setNewExpense(false)
  }
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
          ...enteredExpenseData,
          id:Math.random().toString()
      }
        props.onAddExpense(expenseData);
    }

  return (
     <div className="new-expense">

         {newExpense && <NewEXpenseForm 
          onSaveExpenseData={onSaveExpenseDataHandler} 
          onCloseExp={onCloseExpenseHandler} />}

         {!newExpense && <button 
           className="button || btn" 
           onClick={onOpenExpenseHandler}> 
             Add New EXpense
         </button>}
</div>

);
}
export default NewEXpense;
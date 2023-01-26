import './App.css';
import Expense from './component/Expense/Expense.js';
import NewEXpense from './component/NewExpense/newExpense';
import React, { useState } from 'react';
//  // import { Component } from 'react';


const App = () => {

let data=[
//  {id:"el1",title:"tah",amount:524,data:new Date()},
//  {id:"el2",title:"tah",amount:524,data:new Date()},
//  {id:"el3",title:"tah",amount:524,data:new Date()},
//  {id:"el4",title:"tah",amount:524,data:new Date()}
];

   const [expense, setExpense] = useState(data);

   const date = new Date();

  const onSubmitExpenseData = (expenseData) => {

    console.log(expenseData);
    setExpense(preExp => [...preExp, expenseData] )
  }

 console.log(expense)

  // return ( React.createElement(
  //   'div',
  //   {className:'app-expense'},
  //   React.createElement('h2',{},'let start'),
  //   React.createElement(Expense,{data:data}))

  return(
    <div className='app-expense'>

      <NewEXpense onAddExpense = {onSubmitExpenseData}/>
      <Expense data={expense}/>
      
    </div>
     );  
}
export default App;

import React ,{useState} from "react";
import "./NewExpense.css";


 const NewEXpenseForm = (props) =>{
   // multiple state
  const [title , setTitle] = useState("");
  const [amount , setAmount] =useState("");
  const [date , setDate] = useState("");
 
   const TitleChangeHandler = (e)=>{
     setTitle(e.target.value);
      }
   
   const AmountChangerHandler = (e)=>{ 
     setAmount(e.target.value);
     }
  
  const DateChangerHandler = (e)=>{
    setDate(e.target.value);
         
  }

  const SubmitHandler= (event) => {

    event.preventDefault();
    const newExpense={
     title:title,
     amount:amount,
     data:new Date(date)
   };

   props.onSaveExpenseData(newExpense);

   setTitle('');
   setAmount('');
   setDate('');
 
  }

   return (
     <form onSubmit={SubmitHandler}>
       <div className="new-expense__contorls">
         <div className="new-expene__control">
           <label>title</label>
           <input 
            type='text' 
            value={title}
            onChange={TitleChangeHandler}/>
         </div>

         <div className="new-expene__control">
           <label>amount</label>
           <input 
           type='number' 
           min="0.01" 
           step="0.01" 
           value={amount}
           onChange={AmountChangerHandler}/>
         </div>

         <div className="new-expene__control">
           <label>date</label>
           <input 
           type='date' 
           min="2019-01-01" 
           max="3024-12-31" 
           value={date}
           onChange={DateChangerHandler}/>
         </div>
         <div className="new-expense__actions">
           <button type="button" onClick={props.onCloseExp}>    cancle  </button>
           <button type="submit" className="button">  
            Add Expense  </button>
         </div>
       </div>
     </form>
   )
 }
  export default NewEXpenseForm;
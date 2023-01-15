import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from '../UI/Card'
import "./ExpenseItem.css"
const ExpenseItem=(props)=>{ 
   const changeHandler=()=>{
      console.log("Button clicked!!")
   }
   return( 
    <Card className="expense-item">
       <ExpenseDate date={props.date}></ExpenseDate>
       <ExpenseDetails amount={props.amount} title={props.title}></ExpenseDetails>
       <button onClick={changeHandler}>Change Title</button>
       <button>Delete Expense</button>
       </Card>
   );     
}
export default ExpenseItem;
import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from './Card'
import "./ExpenseItem.css"
const ExpenseItem=(props)=>{ 
   return( 
    <Card className="expense-item">
       <ExpenseDate date={props.date}></ExpenseDate>
       <ExpenseDetails amount={props.amount} title={props.title}></ExpenseDetails>
       </Card>
   );     
}
export default ExpenseItem;
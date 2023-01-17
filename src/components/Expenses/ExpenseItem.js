import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from '../UI/Card'
import "./ExpenseItem.css"
const ExpenseItem=(props)=>{ 
   // const [title,setTitle]=useState(props.title);
   // const clickHandler=()=>{
   //    setTitle('Updated!');
   //    console.log(title);
   // }
   // const [amount,setAmount]=useState(props.amount);
   // const addHandler=()=>{
   //    setAmount(100);
   // }
   return( 
    <Card className="expense-item">
       <ExpenseDate date={props.date}></ExpenseDate>
       <ExpenseDetails amount={props.amount} title={props.title}></ExpenseDetails>
       {/* <button onClick={clickHandler}>Change Title</button>
       <button onClick={addHandler}>Change amount</button> */}
       <button>Delete Expense</button>
       </Card>
   );     
}
export default ExpenseItem;
import React,{useState} from 'react';
import'./ExpenseForm.css'
const ExpenseForm=()=>{
    const[enteredTitle,setEnteredTitle]=useState("");
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
        //console.log(enteredTitle);
    }
    const[enteredAmount,setEnteredAmount]=useState("");
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
        //console.log(enteredAmount);
    }
    const[enteredDate,setEnteredDate]=useState("");
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
        //console.log(enteredDate);
    }
    const expenseDataHandler=(e)=>{
       e.preventDefault();
       const data={
        title:enteredTitle,
        amount:enteredAmount,
        date:enteredDate
       };
       console.log(data);
    }
    return(
        <form onSubmit={expenseDataHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control label">
            <label for="title">Title</label><br></br>
            <input type="text" id="title" name="Title" onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control label">
            <label for="amount">Amount</label><br></br>
            <input type="number" id="amount" name="amount" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control label">
            <label for="date">Date</label><br></br>
            <input type="date" id="date" name="date" min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler}></input>
            </div>
            <button type="submit">Add Expense</button>
            </div>
    </form>
    );
}
export default ExpenseForm;
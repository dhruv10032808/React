import React from 'react';
import'./ExpenseForm.css'
const ExpenseForm=()=>{
    const titleChangeHandler=(event)=>{
        console.log(event.target.value);
    }
    return(
        <form>
            <div className="new-expense__controls">
            <div className="new-expense__control label">
            <label for="title">Title</label><br></br>
            <input type="text" id="title" name="Title" onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control label">
            <label for="amount">Amount</label><br></br>
            <input type="number" id="amount" name="amount" min="0.01" step="0.01"></input>
            </div>
            <div className="new-expense__control label">
            <label for="date">Date</label><br></br>
            <input type="date" id="date" name="date" min="2020-01-01" max="2023-12-31"></input>
            </div>
            <button type="submit">Add Expense</button>
            </div>
    </form>
    );
}
export default ExpenseForm;
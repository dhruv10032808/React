import React from "react"
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
const ExpensesList=(props)=>{
    if(props.items.length===0){  
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    else if(props.items.length>0 && props.items.length===1){
        return (<ul className="expenses-list">
        {props.items.map(expense=>(<div>
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} ></ExpenseItem>
        <p className="expenses-list__fallback">Only single Expense here. Please add more...</p></div>))}
    </ul>)
    }
    return(<ul className="expenses-list">
        {props.items.map(expense=>(
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} ></ExpenseItem>))}
    </ul>)
}

export default ExpensesList;
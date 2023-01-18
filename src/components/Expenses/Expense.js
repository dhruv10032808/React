import React,{useState} from 'react';
import Card from '../UI/Card'
import './Expense.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
const Expenses=(props)=>{
  const[filteredYear,setfilteredYear]=useState('2020');
  const filterChangeHandler=(selectedYear)=>{
      setfilteredYear(selectedYear);
  }
  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear
  })
  
    return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card></div>);
}
export default Expenses;
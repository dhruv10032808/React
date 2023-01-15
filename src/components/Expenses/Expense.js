import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expense.css'
const Expenses=(props)=>{
    return (<Card className="expenses">
        {props.items.map(expense=>(
      <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} loc={expense.LocationOfExpenditure}></ExpenseItem>))}
    </Card>);
}
export default Expenses;
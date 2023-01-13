import "./ExpenseItem.css"
function ExpenseItem(){
    const expenseDate=new Date(2023,1,13);
    const expenseTitle='Car Insurance';
    const expenseAmount= 1000;
    const expenseLocation="Mumbai";
    return (
    <div className="expense-item">
       <div>{expenseDate.toISOString()}</div>
       <div className="expense.item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense.item__price">Rs {expenseAmount}</div>
        <h2>{expenseLocation}</h2>
       </div>
       </div>
       );
}
export default ExpenseItem;
import React from "react";
import Expenses from './components/Expenses/Expense';
const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure:"Mumbai"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) ,LocationOfExpenditure:"Bangalore"},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure:"Pune"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure:"Shimla"
    },
  ];
  
return(
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses}></Expenses> 
     </div>
  );
}

export default App;

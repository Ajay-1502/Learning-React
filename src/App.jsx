import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/New Expense/NewExpense';
import LoginForm from './components/LoginForm';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: '1', date: new Date(2023, 7, 15), title: 'Insurance', price: 100 },
    { id: '2', date: new Date(2024, 3, 25), title: 'Book', price: 10 },
    { id: '3', date: new Date(2024, 10, 11), title: 'Pen', price: 1 },
    { id: '4', date: new Date(2025, 1, 14), title: 'Laptop', price: 200 },
  ]);

  const newExpenseHandler = (newexpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newexpense]);
  };

  return (
    <div>
      <LoginForm />
      <NewExpense newexpense={newExpenseHandler} />
      <Expenses expenditures={expenses}></Expenses>
    </div>
  );
};

export default App;

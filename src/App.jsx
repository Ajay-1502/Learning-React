<<<<<<< HEAD
import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [name, setName] = useState('Change To Descending Order');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const nameChangeHandler = () => {
    if (name == 'Change To Descending Order') {
      setName('Change To Ascending Order');
    } else {
      setName('Change To Descending Order');
    }
  };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} button={name} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={nameChangeHandler}>{name}</Button>
    </div>
  );
}
=======
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
      <NewExpense newexpense={newExpenseHandler} />
      <Expenses expenditures={expenses}></Expenses>
    </div>
  );
};
>>>>>>> f7f55b85b6e81be4374fc4638ef8a98712865194

export default App;

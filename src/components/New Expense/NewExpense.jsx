import React from 'react';
import Expenseform from './Expenseform';
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div className="new-expense">
      <Expenseform />
    </div>
  );
};

export default NewExpense;

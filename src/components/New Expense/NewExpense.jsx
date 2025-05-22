import React from 'react';
import Expenseform from './Expenseform';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseData = (data) => {
    const userExpenseObj = { ...data, id: Math.random().toString() };
    props.newexpense(userExpenseObj);
  };

  return (
    <div className="new-expense">
      <Expenseform onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;

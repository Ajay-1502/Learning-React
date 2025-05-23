import React from 'react';
import Expenseform from './Expenseform';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseData = (data) => {
    const userExpenseObj = { id: Math.random().toString(), ...data };
    props.newexpense(userExpenseObj);
  };

  return (
    <div className="new-expense">
      <Expenseform onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;

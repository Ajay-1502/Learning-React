import React, { useState } from 'react';
import Expenseform from './Expenseform';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveExpenseData = (data) => {
    const userExpenseObj = { id: Math.random().toString(), ...data };
    props.newexpense(userExpenseObj);
    setIsFormVisible(false);
  };

  const showFormHandler = () => {
    setIsFormVisible(true);
  };

  const hideFormHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!isFormVisible && <button onClick={showFormHandler}>Add Expense</button>}
      {isFormVisible && (
        <Expenseform
          onSaveExpenseData={saveExpenseData}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

import './Expenses.css';
import { useState } from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const expenses = props.expenditures;

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = filteredYear
    ? expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      })
    : expenses;

  let expensesContent = (
    <h2 style={{ textAlign: 'center', color: 'red' }}>No Expenses Found</h2>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <>
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          />
          {filteredExpenses.length === 1 && (
            <p>Only one expense found. Please add more</p>
          )}
        </>
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;

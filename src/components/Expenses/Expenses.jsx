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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default Expenses;

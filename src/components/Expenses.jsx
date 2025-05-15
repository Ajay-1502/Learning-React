import './Expenses.css';
import ExpenseItem from './ExpenseItem.jsx';

function Expenses(props) {
  const expenses = props.expenditures || [];

  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default Expenses;

import './Expenses.css';
import ExpenseItem from './ExpenseItem.jsx';
import Card from './Card';

const Expenses = (props) => {
  const expenses = props.expenditures || [];

  return (
    <Card className="expenses">
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
    </Card>
  );
};

export default Expenses;

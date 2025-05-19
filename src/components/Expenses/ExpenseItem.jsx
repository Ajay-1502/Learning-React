import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  function buttonClickHandler() {
    console.log('Button clicked');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={buttonClickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;

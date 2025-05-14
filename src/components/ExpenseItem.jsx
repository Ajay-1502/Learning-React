import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2025, 5, 14).toISOString();
  const expenseTitle = 'Insurance';
  const expenseLocation = 'Bangalore';
  const expenseAmount = '₹500';

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__location">{expenseLocation}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

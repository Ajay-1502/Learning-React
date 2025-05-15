import ExpenseItem from './components/ExpenseItem.jsx';
function App() {
  const expenses = [
    {
      id: '1',
      date: new Date(2025, 1, 15),
      location: 'Bangalore',
      title: 'Insurance',
      price: '₹5000',
    },
    {
      id: '2',
      date: new Date(2025, 2, 15),
      location: 'Delhi',
      title: 'Book',
      price: '₹20',
    },
    {
      id: '3',
      date: new Date(2025, 3, 15),
      location: 'Hyderabad',
      title: 'Pen',
      price: '₹5',
    },
    {
      id: '4',
      date: new Date(2025, 5, 15),
      location: 'Mumbai',
      title: 'Laptop',
      price: '₹50000',
    },
  ];

  return (
    <div>
      <h1>Let's get started</h1>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            location={expense.location}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;

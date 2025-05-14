import ExpenseItem from './components/ExpenseItem.jsx';
function App() {
  return (
    <div>
      <h1>Let's get started</h1>
      <ExpenseItem
        date={new Date(2025, 1, 15)}
        title="Insurance"
        price="₹5000"
        location="Bangalore"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2025, 2, 15)}
        title="Book"
        price="₹20"
        location="Delhi"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2025, 3, 15)}
        title="pen"
        price="₹5"
        location="Hyderabad"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2025, 4, 15)}
        title="Laptop"
        price="₹50000"
        location="Mumbai"
      ></ExpenseItem>
    </div>
  );
}

export default App;

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year-dropdown">Filter by Year</label>
        <select
          value={props.selected}
          onChange={dropDownChangeHandler}
          id="year-dropdown"
        >
          <option value="">Select the year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

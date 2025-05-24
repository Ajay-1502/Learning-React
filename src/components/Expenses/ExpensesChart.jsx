import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  return (
    <div>
      <Chart chartExpenses={props.chartData} />
    </div>
  );
};

export default ExpensesChart;

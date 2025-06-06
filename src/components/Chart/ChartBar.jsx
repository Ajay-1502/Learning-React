import './ChartBar.css';

const chartBar = (props) => {
  let fillHeight = '0%';
  if (props.value > 0) {
    fillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillHeight }}></div>
      </div>
      <div className="chart-bar__label" style={{ color: 'black' }}>
        {props.label}
      </div>
    </div>
  );
};

export default chartBar;

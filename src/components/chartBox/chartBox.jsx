import { Link } from "react-router-dom";
import "./chartBox.css";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
const ChartBox = (props) => {
    return (
      <div className="chartBox">
        {/* Box Info Section */}
        <div className="boxInfo">
          {/* Title */}
          <div className="title">
            <img src={props.icon} alt="" />
            <span>{props.title}</span>
          </div>
          {/* Number */}
          <h1>{props.number}</h1>
          {/* View All Link */}
          <Link to="/" style={{ color: props.color }}>
            View all
          </Link>
        </div>
  
        {/* Chart Info Section */}
        <div className="chartInfo">
          {/* Chart */}
          <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={props.chartData}>
                {/* Tooltip */}
                <Tooltip
                  contentStyle={{ background: "transparent", border: "none" }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 10, y: 70 }}
                />
                {/* Line in the Chart */}
                <Line
                  type="monotone"
                  dataKey={props.dataKey}
                  stroke={props.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
  
          {/* Texts Section */}
          <div className="texts">
            {/* Percentage */}
            <span
              className="percentage"
              style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
            >
              {props.percentage}%
            </span>
            {/* Duration */}
            <span className="duration">this month</span>
          </div>
        </div>
      </div>
    );
  };
  

export default ChartBox;

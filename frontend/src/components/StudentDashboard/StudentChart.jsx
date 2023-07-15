// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

// eslint-disable-next-line react/prop-types
function StudentChart({ dataset }) {
  return (
    <div className="min-w-[15rem] w-[400px] h-[400px]">
      <Doughnut data={dataset} />
    </div>
  );
}

export default StudentChart;

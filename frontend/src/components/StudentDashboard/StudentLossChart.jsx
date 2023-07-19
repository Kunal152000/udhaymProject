import { Line } from "react-chartjs-2";

function StudentLossChart({ dataset }) {
  return (
    <div className="min-w-[20rem] w-[600px] h-[600px]">
      <p>All week Chart of Loss</p>
      <Line data={dataset} />
    </div>
  );
}

export default StudentLossChart;

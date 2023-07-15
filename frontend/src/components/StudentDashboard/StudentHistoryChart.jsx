import { Line } from "react-chartjs-2";

function StudentHistoryChart({ dataset }) {
  return (
    <div className="min-w-[20rem] w-[600px] h-[600px]">
      <p>All week progress Chart</p>
      <Line data={dataset} />
    </div>
  );
}

export default StudentHistoryChart;

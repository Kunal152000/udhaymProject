import StudentChart from "./StudentChart";
import StudentHistoryChart from "./StudentHistoryChart";

function StudentDashboard() {
  const data = {
    labels: ["Loss", "profit", "expenses"],
    datasets: [
      {
        label: "current",
        data: [300, 50, 1000],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  console.log(data);

  const historydata = {
    labels: ["week1", "week2", "week3", "week4", "week5", "week6", "week7"],
    datasets: [
      {
        label: "Weekly expenses",
        data: [220, 118, 315, 285, 300, 80, 100],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <h1 className="text-4xl text-center py-10">
        Progress Report of Student
      </h1>
      <div className="flex w-full p-10 justify-around items-start ">
        <StudentChart dataset={data} />
        <StudentHistoryChart dataset={historydata} />
      </div>
    </>
  );
}

export default StudentDashboard;

import axios from "axios";
import { useEffect, useState } from "react";
import DashboardTemplateStudent from "../DashboardTemplateStudent";
import StudentChart from "./StudentChart";
import StudentHistoryChart from "./StudentHistoryChart";
import { useParams } from "react-router-dom";

function StudentDashboard() {
  const { id } = useParams();
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/studentProgress/${id}`);
        setReportData(response.data.weeklyData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const data = {
    labels: ["Loss", "Profit", "Expenses"],
    datasets: [
      {
        label: "Current",
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

  const historydata = {
    labels: reportData.map((val) => `Week ${val.weekNumber}`),
    datasets: [
      {
        label: "Weekly expenses",
        data: reportData.map((val) => val.moneySpent),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <DashboardTemplateStudent>
      <h1 className="text-4xl text-center py-10">Progress Report of Student</h1>
      <div className="flex w-full p-10 justify-around items-start ">
        <StudentChart dataset={data} />
        <StudentHistoryChart dataset={historydata} />
      </div>
    </DashboardTemplateStudent>
  );
}

export default StudentDashboard;

import axios from "axios";
import DashboardTemplateStudent from "../DashboardTemplateStudent";
import StudentChart from "./StudentChart";
import StudentHistoryChart from "./StudentHistoryChart";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function StudentDashboard() {
  const { id } = useParams();
  const [reportData, setReportData] = useState([]);

  const handleApi = (id) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:5000/studentProgress/${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setReportData(response.data.weeklyData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleApi(id);
  }, []);

  const lastObject =
    reportData.length > 0 ? reportData[reportData.length - 1] : null;

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
    <DashboardTemplateStudent>
      <h1 className="text-4xl text-center py-10">Progress Report of Student</h1>
      <div className="flex w-full p-10 justify-around items-start">
        {lastObject && (
          <StudentChart
            dataset={{
              labels: ["Loss", "Profit", "Expenses"],
              datasets: [
                {
                  label: "current",
                  data: [
                    lastObject.loss,
                    lastObject.profit,
                    lastObject.moneySpent,
                  ],
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                  hoverOffset: 4,
                },
              ],
            }}
          />
        )}
        <StudentHistoryChart dataset={historydata} />
      </div>
    </DashboardTemplateStudent>
  );
}

export default StudentDashboard;

import StudentHistoryChart from "./StudentDashboard/StudentHistoryChart";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DashboardTemplateStudent from "./DashboardTemplateStudent";
import StudentChart from "./StudentDashboard/StudentChart";
import StudentProfitChart from "./StudentDashboard/StudentProfitChart";
import StudentLossChart from "./StudentDashboard/StudentLossChart";

const ProgressReport = () => {
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
        console.log(reportData);
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
  const sortedReportData = reportData.sort(
    (a, b) => a.weekNumber - b.weekNumber
  );
  const historydata = {
    labels: sortedReportData.map((item) => `Week ${item?.weekNumber}`),
    datasets: [
      {
        label: "Weekly expenses",
        data: reportData.map((item) => item.moneySpent),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const profitData = {
    labels: sortedReportData.map((item) => `Week ${item?.weekNumber}`),
    datasets: [
      {
        label: "Weekly Profit",
        data: reportData.map((item) => item.profit),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const lossData = {
    labels: sortedReportData.map((item) => `Week ${item?.weekNumber}`),
    datasets: [
      {
        label: "Weekly Profit",
        data: reportData.map((item) => item.loss),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <DashboardTemplateStudent>
      <h1 className="text-4xl text-center py-10">Progress Report of Student</h1>
      {reportData.length === 0 ? (
        <h3>
          No Progress Detail Added{" "}
          <Link to={`/EditProgress/${id}`}>Add Progress</Link>
        </h3>
      ) : (
        ""
      )}

      <div className="flex w-full p-10  items-start justify-around ">
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
        <StudentProfitChart dataset={profitData} />
        <StudentLossChart dataset={lossData} />
      </div>
    </DashboardTemplateStudent>
  );
};

export default ProgressReport;

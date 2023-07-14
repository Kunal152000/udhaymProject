import DashboardTemplate from "../DashboardTemplate";
import { useNavigate } from "react-router-dom";
import TableTemplate from "../TableTemplate";
const Teacher = () => {
  const navigate = useNavigate();
  return (
    <DashboardTemplate>
      <h1 className=" text-gray-900 text-3xl font-bold mb-5">
        Teacher Dashboard
      </h1>
      <div className="">
        <button className="" onClick={() => navigate("/add-details")}>
          Add Student
        </button>
      </div>
      <TableTemplate />
    </DashboardTemplate>
  );
};

export default Teacher;

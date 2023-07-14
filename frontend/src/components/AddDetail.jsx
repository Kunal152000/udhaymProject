import { useState } from "react";
import DashboardTemplate from "./DashboardTemplate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const handleCall = async (data) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:5000/student/newStudent",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
const AddDetail = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    studentName: "",
    studentId: "",
    studentEmail: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCall(data);
    navigate("/");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <DashboardTemplate>
      <h1 className="mb-10 text-3xl font-bold text-gray-800">
        Add Student Details here
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <h3 className="mb-5 text-xl font-bold text-gray-800">Student Name</h3>
        <input
          type="text"
          name="studentName"
          value={data.studentName}
          onChange={handleInputChange}
          className="border-black border-2 mb-5"
        />
        <h3 className="mb-5 text-xl font-bold text-gray-800">StudentId</h3>
        <input
          type="text"
          name="studentId"
          value={data.studentId}
          onChange={handleInputChange}
          className="border-black border-2 mb-5"
        />
        <h3 className="mb-5 text-xl font-bold text-gray-800">StudentEmail</h3>
        <input
          type="email"
          name="studentEmail"
          value={data.studentEmail}
          onChange={handleInputChange}
          className="border-black border-2 mb-5"
        />
        <button className="ml-5 bg-black" type="submit">
          Add
        </button>
      </form>
    </DashboardTemplate>
  );
};

export default AddDetail;

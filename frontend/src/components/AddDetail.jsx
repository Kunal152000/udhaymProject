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
      alert("Student Added Successfully");
    })
    .catch((error) => {
      alert("Student Not Added, there might be an error");
      console.log(error);
    });
};
const AddDetail = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    studentName: "",
    studentId: "",
    studentEmail: "",
    studentPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCall(data);
    navigate("/");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (
      data.studentName.trim() === "" ||
      data.studentId.trim() === "" ||
      data.studentEmail.trim() === "" ||
      data.studentPassword.trim() === ""
    ) {
      alert("Please fill in all the fields.");
      return;
    }
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
          required="true"
          name="studentName"
          value={data.studentName}
          onChange={handleInputChange}
          className="border-black border-2 mb-5"
        />
        <h3 className="mb-5 text-xl font-bold text-gray-800">StudentId</h3>
        <input
          type="text"
          required="true"
          name="studentId"
          value={data.studentId}
          onChange={handleInputChange}
          className="border-black border-2 mb-5"
        />
        <h3 className="mb-5 text-xl font-bold text-gray-800">StudentEmail</h3>
        <input
          type="email"
          required="true"
          name="studentEmail"
          value={data.studentEmail}
          onChange={handleInputChange}
          className="border-black border-2 mb-5"
        />
        <h3 className="mb-5 text-xl font-bold text-gray-800">
          StudentPassword
        </h3>
        <input
          type="password"
          required="true"
          name="studentPassword"
          value={data.studentPassword}
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

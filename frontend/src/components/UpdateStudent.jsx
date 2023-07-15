import { useState } from "react";
import DashboardTemplate from "./DashboardTemplate";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    studentName: "",
    studentId: "",
    studentEmail: "",
    studentPassword: "",
  });
  const handleUpdate = async (data) => {
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `http://localhost:5000/student/updateStudent/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = async (id) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `http://localhost:5000/student/deleteStudent/${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();

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
        Update Student Details here
      </h1>
      <h3 className="mb-5 text-xl font-bold text-gray-800">Student Name</h3>
      <input
        type="text"
        required="required"
        name="studentName"
        value={data.studentName}
        onChange={handleInputChange}
        className="border-black border-2 mb-5"
      />
      <h3 className="mb-5 text-xl font-bold text-gray-800">StudentId</h3>
      <input
        type="text"
        required="required"
        name="studentId"
        value={data.studentId}
        onChange={handleInputChange}
        className="border-black border-2 mb-5"
      />
      <h3 className="mb-5 text-xl font-bold text-gray-800">StudentEmail</h3>
      <input
        type="email"
        required="required"
        name="studentEmail"
        value={data.studentEmail}
        onChange={handleInputChange}
        className="border-black border-2 mb-5"
      />
      <h3 className="mb-5 text-xl font-bold text-gray-800">StudentPassword</h3>
      <input
        type="password"
        required="required"
        name="studentPassword"
        value={data.studentPassword}
        onChange={handleInputChange}
        className="border-black border-2 mb-5"
      />
      <button
        className="ml-5 bg-black"
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete Student
      </button>
      <button
        className="ml-5 bg-black"
        onClick={() => {
          handleUpdate(data);
        }}
      >
        Update
      </button>
    </DashboardTemplate>
  );
};

export default UpdateStudent;

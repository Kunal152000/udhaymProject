import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const StudentLogin = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState();
  const handleApi = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/student/",
      headers: {},
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setData(response.data.studentData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleApi();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const findVal = data.find(
      (student) =>
        student.studentEmail === login.email &&
        student.studentPassword === login.password
    );
    if (findVal) {
      navigate(`/studentDashboard/${findVal.studentId}`);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col justify-center items-center gap-[10px] h-full mt-10">
      <div className="main ">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              value={login.email}
              placeholder="Email"
              onChange={handleInputChange}
              required="true"
            />
            <input
              className="input"
              type="password"
              name="password"
              value={login.password}
              placeholder="Password"
              onChange={handleInputChange}
              required="true"
            />
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
      <div>
        <p>To login</p>
        <p>use this credentials</p>
        <p>email:kunal@gmail.com</p>
        <p>password:4321</p>
      </div>
    </div>
  );
};

export default StudentLogin;

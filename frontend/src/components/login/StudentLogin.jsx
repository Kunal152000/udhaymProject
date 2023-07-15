import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const StudentLogin = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/studentDashboard/`);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="flex justify-center items-center h-full mt-10">
      <div className="main">
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
    </div>
  );
};

export default StudentLogin;

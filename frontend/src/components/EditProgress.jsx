import DashboardTemplate from "./DashboardTemplate";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProgress = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDisabled, setIsDisabled] = useState();
  const [isDisabled1, setIsDisabled1] = useState();
  const [progress, setProgress] = useState({
    studentId: id,
    weekNumber: "",
    moneySpent: "",
    moneyEarned: "",
    itemSold: "",
    loss: "",
    profit: "",
  });
  // const handleUpdateCall = (progress) => {
  //   let config = {
  //     method: "patch",
  //     maxBodyLength: Infinity,
  //     url: `http://localhost:5000/studentProgress/${id}`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: progress,
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       console.log(response.data);
  //       setIsDisabled(true);
  //       navigate("/");
  //       alert("student progress  added");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const handleCall = async (progress) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `http://localhost:5000/studentProgress/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: progress,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("student progress  added");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("please check the data");
      });
    setIsDisabled(true);
    setIsDisabled1(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCall(progress);
  };
  // const handleUpdateSubmit = (e) => {
  //   e.preventDefault();
  //   handleUpdateCall(progress);
  // };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProgress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setProgress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <DashboardTemplate>
      <h1 className="mb-10 text-3xl font-bold text-gray-800">
        Add Student Progress here
      </h1>
      <div className="flex gap-10  items-start">
        <div>
          <h3 className="mb-5 text-xl font-bold text-gray-800">Week</h3>
          <input
            required={true}
            type="text"
            name="weekNumber"
            value={progress.weekNumber}
            onChange={isDisabled ? handleUpdateChange : handleInputChange}
            className="border-black border-2 mb-5"
          />
          <h3 className="mb-5 text-xl font-bold text-gray-800">Money Spent</h3>
          <input
            required={true}
            type="text"
            name="moneySpent"
            value={progress.moneySpent}
            onChange={isDisabled ? handleUpdateChange : handleInputChange}
            className="border-black border-2 mb-5"
          />
          <h3 className="mb-5 text-xl font-bold text-gray-800">Items Sold</h3>
          <input
            required={true}
            type="text"
            name="itemSold"
            value={progress.itemSold}
            onChange={isDisabled ? handleUpdateChange : handleInputChange}
            className="border-black border-2 mb-5"
          />
        </div>
        <div>
          <h3 className="mb-5 text-xl font-bold text-gray-800">Money Earned</h3>
          <input
            required={true}
            type="text"
            name="moneyEarned"
            value={progress.moneyEarned}
            onChange={isDisabled ? handleUpdateChange : handleInputChange}
            className="border-black border-2 mb-5"
          />
          <h3 className="mb-5 text-xl font-bold text-gray-800">Loss</h3>
          <input
            required={true}
            type="text"
            name="loss"
            value={progress.loss}
            onChange={isDisabled ? handleUpdateChange : handleInputChange}
            className="border-black border-2 mb-5"
          />
          <h3 className="mb-5 text-xl font-bold text-gray-800">Profit</h3>
          <input
            required={true}
            type="text"
            name="profit"
            value={progress.profit}
            onChange={isDisabled ? handleUpdateChange : handleInputChange}
            className="border-black border-2 mb-5"
          />
          <button
            className="ml-5 bg-black"
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Add
          </button>
          {/* <button
            className="ml-5 bg-black"
            onClick={handleUpdateSubmit}
            disabled={isDisabled1}
          >
            Update
          </button> */}
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default EditProgress;

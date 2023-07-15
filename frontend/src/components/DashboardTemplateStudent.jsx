import { useNavigate } from "react-router-dom";
const DashboardTemplateStudent = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed left-0 top-0 w-[15%] p-5 border-white border-r-2 z-20 h-full max-h-[100vh] min-w-[200px] flex-[0.18] bg-gray-600 text-white text-xl">
        Welcome Student
        <div className="mt-[30px] cursor-pointer" onClick={() => navigate("/")}>
          Home
        </div>
      </div>
      <div className="flex-[0.82] sticky left-[28%] min-w-0 ">
        <div className="static  py-10  ml-[300px]">{props.children}</div>
      </div>
    </>
  );
};

export default DashboardTemplateStudent;

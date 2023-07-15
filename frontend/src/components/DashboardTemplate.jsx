import { useNavigate } from "react-router-dom";
const DashboardTemplate = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed left-0 top-0 w-[15%] p-5 border-white border-r-2 z-20 h-full max-h-[100vh] min-w-[200px] flex-[0.18] bg-gray-600 text-white text-xl">
        Welcome Teacher
        <div className="mt-[30px] cursor-pointer" onClick={() => navigate("/")}>
          Home
        </div>
      </div>
      <div className="flex-[0.82] sticky left-[28%] min-w-0 ">
        <div className="sticky top-0 pt-[25px] left-[18%] bg-gray-600 h-[10vh] z-[21] text-white">
          <div className="ml-[1350px] ">
            <a href="/studentLogin" className="text-white">
              For student Login
            </a>
          </div>
        </div>
        <div className="static  py-10  ml-[300px]">{props.children}</div>
      </div>
    </>
  );
};

export default DashboardTemplate;

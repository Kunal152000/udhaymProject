import "./App.css";
import Teacher from "./components/Dashboard/Teacher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDetail from "./components/AddDetail";
import StudentLogin from "./components/login/StudentLogin";
import EditProgress from "./components/EditProgress";
import UpdateStudent from "./components/UpdateStudent";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Teacher />} />
        <Route path="/add-details" element={<AddDetail />} />
        <Route path="/studentLogin" element={<StudentLogin />} />
        <Route path="/EditProgress/:id" element={<EditProgress />} />
        <Route path="/updateStudent/:id" element={<UpdateStudent />} />
        <Route path="/studentDashboard/:id" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

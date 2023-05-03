import { Route, Routes } from "react-router";
import StudentLoginPage from "./components/StudentLoginPage";
import StudentDashboard from "./components/StudentPage/StudentDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentLoginPage />} />
      <Route path="admin-login" element={""} />
      <Route path="student-dashboard" element={<StudentDashboard />} />
      <Route path="admin-dashboard" element={""} />
    </Routes>
  );
}

export default App;

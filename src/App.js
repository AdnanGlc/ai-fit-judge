import { Route, Routes } from "react-router";
import StudentLoginPage from "./components/StudentLoginPage";
import StudentDashboard from "./components/StudentPage/StudentDashboard";
import AdminDashboard from "./components/AdminPage/AdminDashboard";
import ResultsTable from "./components/AdminPage/ResultsTable";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentLoginPage />} />
      <Route path="admin-login" element={""} />
      <Route path="student-dashboard" element={<StudentDashboard />} />
      <Route path="admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-dashboard/results" element={<ResultsTable />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";
import StudentLoginPage from "./components/StudentLoginPage";
import StudentDashboard from "./components/StudentPage/StudentDashboard";
import AdminDashboard from "./components/AdminPage/AdminDashboard";
import ResultsTable from "./components/AdminPage/ResultsTable";
import Testieanje from "./components/StudentPage/Testiranje";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentLoginPage />} />
      <Route path="admin-login" element={""} />
      <Route path="student-dashboard" element={<StudentDashboard />} />
      <Route path="admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-dashboard/results" element={<ResultsTable />} />
      <Route path="/testiranje" element={<Testieanje />} />
    </Routes>
  );
}

export default App;

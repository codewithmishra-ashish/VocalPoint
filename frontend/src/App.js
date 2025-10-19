import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import VoiceRecord from "./pages/VoiceRecord";
import AddTask from "./pages/AddTask";
import AdminPanel from "./pages/AdminPanel";
import RecordPage from "./pages/RecordPage";


// Protected Route Wrapper
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/record1"
          element={
            <PrivateRoute>
              <VoiceRecord />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-task"
          element={
            <PrivateRoute>
              <AddTask />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-panel"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        <Route 
          path="/record" 
          element={
            <RecordPage />
          } 
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

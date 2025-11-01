// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterWorker from "./pages/RegisterWorker";
import RegisterCompany from "./pages/RegisterCompany";
import LoginAdmin from "./pages/LoginAdmin";
import DashboardWorker from "./pages/DashboardWorker";
import DashboardCompany from "./pages/DashboardCompany";
import DashboardAdmin from "./pages/DashboardAdmin";
import ProfileWizard from "./pages/ProfileWizard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register-worker" element={<RegisterWorker />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/profile-wizard" element={<ProfileWizard />} />
        <Route path="/dashboard-worker" element={<ProtectedRoute roles={['worker']}><DashboardWorker /></ProtectedRoute>} />
        <Route path="/dashboard-company" element={<ProtectedRoute roles={['company']}><DashboardCompany /></ProtectedRoute>} />
        <Route path="/dashboard-admin" element={<ProtectedRoute roles={['admin']}><DashboardAdmin /></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
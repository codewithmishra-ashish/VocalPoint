// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User, Building2, Shield, ArrowRight } from "lucide-react";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short").required("Required"),
});

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState("worker");
  const [error, setError] = useState("");

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setError("");
      await login(values, activeRole); // Backend handles role via body
      const redirectMap = {
        worker: "/dashboard-worker",
        company: "/dashboard-company",
        admin: "/dashboard-admin",
      };
      navigate(redirectMap[activeRole]);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  const roleConfig = {
    worker: { icon: User, color: "green", label: "Gig Worker" },
    company: { icon: Building2, color: "blue", label: "Company" },
    admin: { icon: Shield, color: "purple", label: "Admin" },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-blue-950 to-gray-950 px-6">
      <div className="max-w-md w-full bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-8 border border-gray-800 shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-0.5">
            <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome Back</h2>

        {/* Role Tabs */}
        <div className="flex justify-center mb-8 bg-gray-800/50 rounded-xl p-1">
          {Object.entries(roleConfig).map(([role, { icon: Icon, label, color }]) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${
                activeRole === role
                  ? `bg-${color}-600 text-white shadow-lg`
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>

        {/* Form */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
              </div>

              {error && <div className="text-red-400 text-center text-sm">{error}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-700"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                }`}
              >
                {isSubmitting ? "Logging in..." : "Login"}
                {!isSubmitting && <ArrowRight size={20} />}
              </button>
            </Form>
          )}
        </Formik>

        {/* Register Link */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don't have an account?{" "}
          <Link
            to={`/register-${activeRole}`}
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Register as {roleConfig[activeRole].label}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
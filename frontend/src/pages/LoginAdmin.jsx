// src/pages/LoginAdmin.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Shield, ArrowRight } from "lucide-react";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short").required("Required"),
});

const LoginAdmin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setError("");
      await login(values, "admin");
      navigate("/dashboard-admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-blue-950 to-gray-950 px-6">
      <div className="max-w-md w-full bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-8 border border-gray-800">
        <div className="flex justify-center mb-8">
          <Shield size={48} className="text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-center text-white mb-6">Admin Login</h2>
        
        <Formik initialValues={{ email: "", password: "" }} validationSchema={LoginSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <Field name="email" type="email" placeholder="Admin Email" className="w-full p-4 rounded-xl bg-gray-800 text-white" />
                <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
              </div>
              <div>
                <Field name="password" type="password" placeholder="Password" className="w-full p-4 rounded-xl bg-gray-800 text-white" />
                <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
              </div>
              {error && <div className="text-red-400 text-center text-sm">{error}</div>}
              <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600">
                Admin Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginAdmin;
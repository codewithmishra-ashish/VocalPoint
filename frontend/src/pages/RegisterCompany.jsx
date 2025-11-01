// src/pages/RegisterCompany.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Building2, ArrowRight } from "lucide-react";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
  companyName: Yup.string().required("Required"),
});

const RegisterCompany = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    try {
      setError("");
      await register(values, "company");
      navigate("/profile-wizard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-blue-950 to-gray-950 px-6">
      <div className="max-w-md w-full bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-8 border border-gray-800">
        <div className="flex justify-center mb-8">
          <Building2 size={48} className="text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-center text-white mb-6">Register Company</h2>
        
        <Formik initialValues={{ email: "", password: "", companyName: "" }} validationSchema={RegisterSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <Field name="companyName" placeholder="Company Name" className="w-full p-4 rounded-xl bg-gray-800 text-white" />
                <ErrorMessage name="companyName" component="div" className="text-red-400 text-sm mt-1" />
              </div>
              <div>
                <Field name="email" type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-gray-800 text-white" />
                <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
              </div>
              <div>
                <Field name="password" type="password" placeholder="Password" className="w-full p-4 rounded-xl bg-gray-800 text-white" />
                <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
              </div>
              {error && <div className="text-red-400 text-center text-sm">{error}</div>}
              <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600">
                Register Company
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterCompany;
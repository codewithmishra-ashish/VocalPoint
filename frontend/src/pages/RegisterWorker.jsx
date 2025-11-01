// src/pages/RegisterWorker.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User, ArrowRight } from "lucide-react";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short").required("Required"),
  name: Yup.string().required("Required"),
  language: Yup.string().required("Required"),
});

const RegisterWorker = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    try {
      setError("");
      const res = await register({ ...values, role: "worker" });
      const role = res.user.role;
      const redirectMap = {
        worker: "/dashboard-worker",
        company: "/dashboard-company",
        admin: "/dashboard-admin",
      };
      navigate(redirectMap[role]); // Redirect immediately
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-blue-950 to-gray-950 px-6">
      <div className="max-w-md w-full bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-8 border border-gray-800 shadow-2xl">
        <div className="flex justify-center mb-8">
          <User size={48} className="text-green-400" />
        </div>
        <h2 className="text-3xl font-bold text-center text-white mb-6">Register as Gig Worker</h2>

        <Formik initialValues={{ email: "", password: "", name: "", language: "" }} validationSchema={RegisterSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <Field name="name" placeholder="Full Name" className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500" />
                <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
              </div>
              <div>
                <Field name="email" type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500" />
                <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
              </div>
              <div>
                <Field name="password" type="password" placeholder="Password" className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500" />
                <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
              </div>
              <div>
                <Field as="select" name="language" className="w-full p-4 rounded-xl bg-gray-800 text-white">
                  <option value="">Select Language</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Hindi">Hindi</option>
                </Field>
                <ErrorMessage name="language" component="div" className="text-red-400 text-sm mt-1" />
              </div>

              {error && <div className="text-red-400 text-center text-sm">{error}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Registering..." : "Register & Continue"}
                {!isSubmitting && <ArrowRight size={20} />}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterWorker;
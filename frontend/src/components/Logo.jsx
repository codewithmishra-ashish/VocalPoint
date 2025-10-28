// src/components/Logo.jsx
import React from "react";
import logo from "../assets/logo.png";

const Logo = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <img
      src={logo}
      alt="VocalPoint Logo"
      className={`${sizes[size]} rounded-full object-contain ${className}`}
      loading="lazy"
    />
  );
};

export default Logo;
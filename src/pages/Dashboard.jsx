import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("userName") || "User";

  const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <p>Welcome, {user}!</p>
      <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
    </div>
  );
}
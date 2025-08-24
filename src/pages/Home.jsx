import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="fw-bold" style={{ color:"red"}} >Welcome to Mini Basket !</h1>
      <p className="text-muted" style={{ color:"black"}}>Shop your favorite products with ease.</p>

      <p className="" style={{ color:"blue"}}><h6>New to Mini Basket? </h6></p>
      <p className="" style={{ color:"blue"}}><h6>Create an account to get started!</h6></p>


      <div className="mt-3">
        <Link to="/signup" className="btn btn-success me-4">
          Sign Up
        </Link>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-dark navbar-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mini Basket</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/products">Products</NavLink></li>
            {/* <li className="nav-item"><NavLink className="nav-link" to="/orders">Orders</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/cart">Cart</NavLink></li> */}
            {/* <li className="nav-item"><NavLink className="nav-link" to="/signup">Signup</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
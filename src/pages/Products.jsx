import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

export default function Products() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Products</h2>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img src={p.image} className="card-img-top" style={{ height: "500px", objectFit: "cover" }} alt={p.name} />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p><strong>₹{p.price}</strong> • {p.category}</p>
                <p className="text-muted">{p.stock ? "In Stock" : "Out of Stock"}</p>
                <Link to={`/products/${p.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
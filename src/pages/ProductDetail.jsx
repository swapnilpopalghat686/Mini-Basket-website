import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2 className="text-center mt-5">Product not found</h2>;

  return (
    <div className="container mt-5 d-flex gap-4">
      <img src={product.image} alt={product.name} style={{ maxWidth: "300px" }} />
      <div>
        <h2>{product.name}</h2>
        <p><strong>₹{product.price}</strong> • {product.category}</p>
        <p>{product.description}</p>
        <p>{product.stock ? "In Stock ✅" : "Out of Stock ❌"}</p>
        <button className="btn btn-secondary mt-3" onClick={() => navigate("/products")}>
          Back to Products
        </button>
      </div>
    </div>
  );
}
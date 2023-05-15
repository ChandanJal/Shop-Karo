import React from "react";

import Rating from "@/components/Rating";

export default function MainDetail({ product }) {
  return (
    <>
      <h2>{product.title}</h2>
      <p>{product.description}</p>

      <div className="d-flex align-items-center gap-2 mb-2">
        <Rating rating={product.rating} />
        <span>({product.stock})</span>
      </div>
    </>
  );
}

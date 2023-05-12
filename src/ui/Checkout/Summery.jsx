import React from "react";
import { useSelector } from "react-redux";

import { getCartItems } from "@/store/entities/carts";

import { formateCurrency } from "@/utils/number-formater";

export default function Summery() {
  const products = useSelector(getCartItems);

  const grandTotal = products.reduce((a, b) => {
    return b.price * b.qty + a;
  }, 0);

  return (
    <div className="cart-container mt-4">
      <h5 className="fw-bold mb-3">Order Summery</h5>

      <div className="d-flex align-items-center justify-content-between mb-2">
        <p className="m-0">Total</p>
        <p className="m-0">{formateCurrency(grandTotal)}</p>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <p className="m-0">Discount</p>
        <p className="m-0">{formateCurrency(0)}</p>
      </div>

      <div className="d-flex align-items-center justify-content-between mb-2">
        <p className="m-0">Coupons</p>
        <p className="m-0">{formateCurrency(0)}</p>
      </div>

      <hr />

      <div className="d-flex align-items-center justify-content-between">
        <p className="m-0 fw-bold">Grand Total</p>
        <p className="m-0 fw-bold">{formateCurrency(grandTotal)}</p>
      </div>
    </div>
  );
}

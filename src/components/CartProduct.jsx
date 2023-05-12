import Image from "next/image";
import React from "react";

import QuatityCounter from "./QuatityCounter";

import { formateCurrency } from "@/utils/number-formater";

export default function CartProduct({ thumbnail, title, brand, price, qty, onUpdateQty }) {
  return (
    <div className="cart-list-item">
      <div className="d-flex align-items-center gap-3">
        <Image src={thumbnail} height={100} width={100} alt={title} />

        <div>
          <h5 className="m-0 fw-bold">{title}</h5>
          <p className="m-0">{brand}</p>
        </div>
      </div>

      <div>
        <h5 className="text-end user-select-none">{formateCurrency(price * qty)}</h5>
        <QuatityCounter initialQty={qty} onChangeCounter={onUpdateQty} />
      </div>
    </div>
  );
}

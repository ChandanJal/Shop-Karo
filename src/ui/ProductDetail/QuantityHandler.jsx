import React from "react";

import QuatityCounter from "@/components/QuatityCounter";

export default function QuantityHandler({ setQty, stock }) {
  return (
    <div className="d-flex align-items-center gap-4 mb-3">
      <QuatityCounter initialQty={1} onChangeCounter={setQty} />

      <p className="m-0 fs-7">
        Only {stock} Left ! <br />
        Don&apos;t miss.{" "}
      </p>
    </div>
  );
}

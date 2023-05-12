import React, { useState } from "react";

import { RadioButton } from "@/components/Input";
import Button from "@/components/common/Button";

const options = [
  {
    label: "Cash on Delivery",
  },
  {
    label: "Shoping Card",
  },
  {
    label: "Paypal",
  },
  {
    label: "Credit Card",
  },
];

export default function Payments() {
  const [value, setValue] = useState();

  return (
    <div className="cart-container mt-4">
      <h5 className="fw-bold border-bottom pb-2">Payment Method</h5>

      {options.map(({ label }, index) => (
        <RadioButton
          key={`_payments_${index}`}
          label={label}
          name="payment"
          value={label}
          checked={value === label}
          onChange={() => setValue(label)}
        />
      ))}

      <div className="mt-3">
        <Button className="w-100 btn-primary text-center">Check Out</Button>
      </div>
    </div>
  );
}

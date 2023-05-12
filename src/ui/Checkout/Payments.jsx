import React, { useState } from "react";
import Lottie from "lottie-react";
import successAmimation from "../../assets/lottie/successful.json";

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
    <>
      <div
        className="modal fade modal-lg"
        id="staticBackdrop"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body h-25">
              <div className="d-flex justify-content-center align-items-center flex-column gap-3 pb-4">
                <Lottie
                  animationData={successAmimation}
                  style={{ height: "200px", width: "200px", objectFit: "cover" }}
                  className="lottie-checkout"
                />
                <p>Your order had been placed successfully. </p>
                <Button data-bs-target="#staticBackdrop" data-bs-toggle="modal" data-bs-dismiss="modal">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          <Button
            className="w-100 btn-primary text-center"
            data-bs-toggle="modal"
            href="#staticBackdrop"
            role="button"
            disabled={!value}
          >
            Check Out
          </Button>
        </div>
      </div>
    </>
  );
}

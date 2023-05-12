import React, { useId } from "react";

export default function CheckBox({ label }) {
  const id = useId();

  return (
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id={id} />
      {label && (
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}

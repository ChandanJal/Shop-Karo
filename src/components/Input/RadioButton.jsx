import React, { useId } from "react";

export default function RadioButton({
  name,
  value,
  label,
  checked = false,
  onChange,
  ...rest
}) {
  const id = useId();

  return (
    <div className="form-check mt-3">
      <input
        className="form-check-input position-static"
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      {label && (
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}

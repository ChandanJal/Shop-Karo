import React, { useId } from "react";

export default function Input({
  type = "text",
  label,
  register,
  name,
  hellerText,
  error,
  ...rest
}) {
  const id = useId();
  const labelId = useId();

  return (
    <div className={`mb-3 form-input-content ${error ? "error" : ""}`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        aria-describedby={labelId}
        {...(register && register(name))}
        {...rest}
      />
      {hellerText && (
        <div id={labelId} className="form-text">
          {hellerText}
        </div>
      )}
      {error && <div className="form-text error">{error}</div>}
    </div>
  );
}

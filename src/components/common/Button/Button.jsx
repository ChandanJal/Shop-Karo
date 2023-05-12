export default function Button({
  Icon,
  size,
  className = "btn-primary",
  disabled = false,
  loading = false,
  children,
  ...rest
}) {
  return (
    <button
      className={`btn custom-btn d-flex align-items-center justify-content-center gap-2 ${size} ${className} `}
      disabled={disabled || loading}
      {...rest}
    >
      {Icon && <Icon />}
      {children}
      <div className={`loading ${loading ? "d-block" : "d-none"}`}></div>
    </button>
  );
}

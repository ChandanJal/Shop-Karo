import React from "react";

export default function SlideButton({
  label,
  slide = "prev",
  iconClassName = "carousel-control-prev-icon",
  carouselId,
}) {
  return (
    <button
      className={`carousel-control-${slide}`}
      type="button"
      data-bs-target={`#${carouselId}`}
      data-bs-slide={slide}
    >
      <span className={iconClassName} aria-hidden="true"></span>
      <span className="visually-hidden">{label}</span>
    </button>
  );
}

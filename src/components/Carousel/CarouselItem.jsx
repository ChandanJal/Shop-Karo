export default function CarouselItem({ active = false, children }) {
  return (
    <div className={`carousel-item w-100 ${active ? "active" : ""}`} data-bs-interval="10000">
      {children}
    </div>
  );
}

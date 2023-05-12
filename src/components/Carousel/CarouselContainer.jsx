import CarouselItem from "./CarouselItem";

export default function CarouselContainer({ contents }) {
  return (
    <div className="carousel-inner">
      {contents.map(({ id, content }, index) => (
        <CarouselItem key={`_carouselItem${id}`} active={index === 0}>
          {content}
        </CarouselItem>
      ))}
    </div>
  );
}

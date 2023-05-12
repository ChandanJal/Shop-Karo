import SlideButton from "./SlideButton";

export default function Navigation({ carouselId }) {
  return (
    <>
      <SlideButton carouselId={carouselId} label="Previous" slide="prev" iconClassName="carousel-control-prev-icon" />

      <SlideButton carouselId={carouselId} label="Next" slide="next" iconClassName="carousel-control-next-icon" />
    </>
  );
}

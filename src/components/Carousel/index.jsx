import { useEffect, useState } from "react";

import Navigation from "./Navigation";
import CarouselContainer from "./CarouselContainer";

import { generateRandomText } from "@/utils/id-helper";

export default function Carousel({ contents }) {
  const [carouselId, setCarouselId] = useState();

  useEffect(() => {
    const id = generateRandomText();
    setCarouselId(id);
  }, []);

  return (
    <div id={carouselId} className="carousel slide mt-4" data-bs-ride="carousel">
      <CarouselContainer contents={contents} />
      <Navigation carouselId={carouselId} />
    </div>
  );
}

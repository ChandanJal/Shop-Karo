import Image from "next/image";

import Carousel from "@/components/Carousel";
import Button from "@/components/common/Button";

import { generateRandomId } from "@/utils/id-helper";

const carousel = [
  {
    id: generateRandomId(),
    content: (
      <>
        <Image
          src="/assets/banner-1.jpg"
          fill
          className="d-block position-relative"
          alt="Banner Image"
        />

        <div className="carousel-content one">
          <h1 className="fw-bold">Make Buds Your Buddie</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            at dolores assumenda dignissimos enim? Libero nulla, inventore
            repudiandae nobis officiis, eveniet consectetur possimus odio
            cupiditate dicta fuga magni et alias.
          </p>

          <Button>Buy Now</Button>
        </div>
      </>
    ),
  },
  {
    id: generateRandomId(),
    content: (
      <>
        <Image
          src="/assets/banner-2.jpg"
          fill
          className="d-block position-relative"
          alt="Banner Image"
        />

        <div className="carousel-content two">
          <h1 className="text-end">Check Latest Collections</h1>
          <p className="mb-5 text-end">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            at dolores assumenda dignissimos enim? Libero nulla, inventore
            repudiandae nobis officiis, eveniet consectetur possimus odio
            cupiditate dicta fuga magni et alias.
          </p>

          <div className="d-flex justify-content-end align-items-end">
            <Button>Buy Now</Button>
          </div>
        </div>
      </>
    ),
  },
  {
    id: generateRandomId(),
    content: (
      <>
        <Image
          src="/assets/banner-3.jpg"
          fill
          className="d-block position-relative"
          alt="Banner Image"
        />

        <div className="carousel-content three">
          <h1 className="">Check Latest Collections</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            at dolores assumenda dignissimos enim? Libero nulla, inventore
            repudiandae nobis officiis, eveniet consectetur possimus odio
            cupiditate dicta fuga magni et alias.
          </p>

          <Button>Buy Now</Button>
        </div>
      </>
    ),
  },
];

export default function HeroSection() {
  return <Carousel contents={carousel} />;
}

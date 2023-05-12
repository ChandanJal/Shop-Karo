import Image from "next/image";
import { useRouter } from "next/router";

import Carousel from "@/components/Carousel";
import Button from "@/components/common/Button";

import { generateRandomId } from "@/utils/id-helper";

export default function HeroSection() {
  const { push } = useRouter();

  const handleRedirect = (url) => {
    push(url);
  };

  const carousel = [
    {
      id: generateRandomId(),
      content: (
        <>
          <Image src="/assets/banner-iphone.jpg" fill className="d-block position-relative" alt="Banner Image" />

          <div className="carousel-content one">
            <h1 className="fw-bold">Get You iPhone Right Now.</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at dolores assumenda dignissimos
              enim? Libero nulla, inventore repudiandae nobis officiis, eveniet consectetur possimus odio cupiditate
              dicta fuga magni et alias.
            </p>

            <Button onClick={() => handleRedirect("/products?category=smartphones")}>Buy Now</Button>
          </div>
        </>
      ),
    },
    {
      id: generateRandomId(),
      content: (
        <>
          <Image src="/assets/banner-fashion.jpg" fill className="d-block position-relative" alt="Banner Image" />

          <div className="carousel-content two">
            <h1 className="text-end fw-bold">Check Latest Collections</h1>
            <p className="mb-5 text-end">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at dolores assumenda dignissimos
              enim? Libero nulla, inventore repudiandae nobis officiis, eveniet consectetur possimus odio cupiditate
              dicta fuga magni et alias.
            </p>

            <div className="d-flex justify-content-end align-items-end">
              <Button onClick={() => handleRedirect("/products?category=womens-dresses")}>Buy Now</Button>
            </div>
          </div>
        </>
      ),
    },
    {
      id: generateRandomId(),
      content: (
        <>
          <Image src="/assets/banner-frame-1.jpg" fill className="d-block position-relative" alt="Banner Image" />

          <div className="carousel-content one">
            <h1 className="fw-bolder text-uppercase text-black">Summer Is On !</h1>
            <p className="mb-5 text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at dolores assumenda dignissimos
              enim? Libero nulla, inventore repudiandae nobis officiis, eveniet consectetur possimus odio cupiditate
              dicta fuga magni et alias.
            </p>

            <Button onClick={() => handleRedirect("/products?category=sunglasses")}>Buy Now</Button>
          </div>
        </>
      ),
    },
  ];

  return <Carousel contents={carousel} />;
}

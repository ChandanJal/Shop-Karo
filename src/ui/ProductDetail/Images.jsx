import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Images({ product }) {
  const [thumbnail, setThumbnail] = useState("/assets/banner-1.png");

  useEffect(() => {
    if (product) setThumbnail(product.thumbnail);
  }, [product]);

  return (
    <>
      <div className="img-container">
        <Image src={thumbnail} fill alt={product.title} className="position-relative" />
      </div>

      <div className="options-img">
        {product.images.map((img) => (
          <div key={img} className={`opt-img ${img === thumbnail ? "active" : ""}`}>
            <Image src={img} fill alt="" className="position-relative" onClick={() => setThumbnail(img)} />
          </div>
        ))}
      </div>
    </>
  );
}

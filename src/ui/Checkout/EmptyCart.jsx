import React from "react";
import Image from "next/image";

import Header from "@/components/Header";

export default function EmptyCart() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="position-relative d-flex justify-content-center align-items-center flex-column">
          <Image
            src="/assets/empty-cart.png"
            height={300}
            width={300}
            alt="Noting"
          />
          <h4>Nothing Inside Your Cart !</h4>
        </div>
      </div>
    </>
  );
}

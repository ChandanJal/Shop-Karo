import React from "react";
import Image from "next/image";

import Header from "@/components/Header";

export default function EmptyFavorite() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
          <Image height={400} width={400} src="/assets/no-favorites.png" alt="No favorite image" />
          <h4>Nothing on your favorite !</h4>
        </div>
      </div>
    </>
  );
}

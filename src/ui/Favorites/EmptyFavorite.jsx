import React from "react";
import Image from "next/image";

export default function EmptyFavorite() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <Image height={400} width={400} src="/assets/no-favorites.png" alt="No favorite image" />
        <h4>Nothing on your favorite !</h4>
      </div>
    </div>
  );
}

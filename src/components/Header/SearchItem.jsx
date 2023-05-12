import Image from "next/image";

import Rating from "../Rating";

export default function SearchItem({ thumbnail, title, rating, stock, price, onClick }) {
  return (
    <div className="search-product-item" onClick={onClick}>
      <div className="img-container">
        <Image src={thumbnail} width={60} height={60} alt="someting" />
        <p>{title}</p>
      </div>

      <div className="rating-content">
        <Rating rating={rating} />
        <span>({stock})</span>
      </div>

      <p className="price">{price}</p>
    </div>
  );
}

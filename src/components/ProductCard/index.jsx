import Image from "next/image";
import { MdFavoriteBorder, MdFavorite, MdDelete } from "react-icons/md";

import Rating from "../Rating";

import Button, { OutlineButton } from "../common/Button";

import { formateCurrency } from "@/utils/number-formater";

export default function ProductCard({
  title,
  description,
  price,
  rating,
  thumbnail,
  stock,
  isFavorite = false,
  isOnCart = false,
  onClick,
  onAddToCart,
  onRemoveItem,
  onFavoriteChange,
}) {
  const handleFavoriteChange = () => {
    if (onFavoriteChange) onFavoriteChange(!isFavorite);
  };

  return (
    <div className={"card-product"}>
      <div className={"img-container"}>
        <div className={"fav-icon-container"} onClick={handleFavoriteChange}>
          {isFavorite === true ? (
            <MdFavorite size={20} color="#ff0c0c" />
          ) : (
            <MdFavoriteBorder size={20} />
          )}
        </div>

        <Image src={thumbnail} fill alt={title} onClick={onClick} />
      </div>

      <div className={"content"}>
        <div className={"top-content"}>
          <p className={"name"}>{title}</p>
          <p className={"price"}>{formateCurrency(price)}</p>
        </div>
        <p className={"description"}>{description}</p>

        <div className="d-flex align-items-center gap-2 mb-4">
          <Rating rating={rating} /> <span>({stock})</span>
        </div>

        {isOnCart ? (
          <Button
            size="sm"
            Icon={MdDelete}
            className="btn-danger"
            onClick={onRemoveItem}
          >
            Remove From Cart
          </Button>
        ) : (
          <OutlineButton size="sm" onClick={onAddToCart}>
            Add To Cart
          </OutlineButton>
        )}
      </div>
    </div>
  );
}

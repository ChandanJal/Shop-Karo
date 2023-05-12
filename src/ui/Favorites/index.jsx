import Header from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { useRouter } from "next/router";

import { getFavorites, clearAllFavorites, removeFavorite } from "@/store/entities/favorites";

import { TextButton } from "@/components/common/Button";
import CartProductCard from "@/components/CartProductCard";
import EmptyFavorite from "./EmptyFavorite";

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const { push } = useRouter();

  const clearAll = () => {
    dispatch(clearAllFavorites());
  };

  const handleRemove = (item) => {
    dispatch(removeFavorite(item));
  };

  const handleClick = (item) => {
    push(`/products/${item.id}`);
  };

  if (favorites.length === 0) return <EmptyFavorite />;

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-5 mb-5">
          <h2 className="fw-bold">Your Favorites !</h2>
          <TextButton className="p-0" Icon={AiFillDelete} onClick={clearAll}>
            Clear All
          </TextButton>
        </div>
        <div className="row">
          {favorites.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={`_favorite_item_${product.id}`}>
              <CartProductCard
                {...product}
                onClick={() => handleClick(product)}
                onRemoveItem={() => handleRemove(product)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

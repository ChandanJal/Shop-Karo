import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "@/components/ProductCard";

import useProducts from "@/hooks/api/useProducts";

import {
  getCartItems,
  addCartItem,
  removeCartItem,
} from "@/store/entities/carts";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "@/store/entities/favorites";

export default function ProductCategorySection() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const favorites = useSelector(getFavorites);

  const { data } = useProducts("smartphones");
  const { push } = useRouter();

  const handleAddToCart = (item) => {
    dispatch(addCartItem({ ...item, qty: 1 }));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeCartItem(item));
  };

  const handleProductClick = (id) => {
    push(`/products/${id}`);
  };

  const handleFavoriteChange = (product, state) => {
    if (state === true) dispatch(addFavorite(product));
    else dispatch(removeFavorite(product));
  };

  return (
    <section className="smartphone">
      <h3 className="section-heading">Smartphones For You !</h3>

      <div className="row mt-5">
        {data?.products?.map((product) => (
          <div className="col-md-3 mb-5" key={`_product${product.id}`}>
            <ProductCard
              {...product}
              isFavorite={favorites.findIndex((f) => f.id === product.id) > -1}
              isOnCart={cartItems.findIndex((c) => c.id === product.id) > -1}
              onClick={() => handleProductClick(product.id)}
              onAddToCart={() => handleAddToCart(product)}
              onRemoveItem={() => handleRemoveItem(product)}
              onFavoriteChange={(state) => handleFavoriteChange(product, state)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

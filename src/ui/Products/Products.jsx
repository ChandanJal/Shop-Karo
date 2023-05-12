import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "@/components/ProductCard";

import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "@/store/entities/favorites";
import {
  getCartItems,
  addCartItem,
  removeCartItem,
} from "@/store/entities/carts";

export default function Products({ products }) {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const cartItems = useSelector(getCartItems);
  const { push } = useRouter();

  const handleAddToCart = (product) => {
    dispatch(addCartItem({ ...product, qty: 1 }));
  };

  const handleFavoriteChange = (check, product) => {
    if (check) dispatch(addFavorite(product));
    else dispatch(removeFavorite(product));
  };

  const handleRemoveCart = (product) => {
    dispatch(removeCartItem(product));
  };

  const handleProductClick = (product) => {
    push(`/products/${product.id}`);
  };

  return (
    <div className="row products-page mt-4">
      {products.map((product) => (
        <div className="col-md-3 col-lg-3 mb-5" key={`_products_${product.id}`}>
          <ProductCard
            {...product}
            isFavorite={favorites.findIndex((f) => f.id === product.id) > -1}
            isOnCart={cartItems.findIndex((c) => c.id === product.id) > -1}
            onAddToCart={() => handleAddToCart(product)}
            onFavoriteChange={(check) => handleFavoriteChange(check, product)}
            onRemoveItem={() => handleRemoveCart(product)}
            onClick={() => handleProductClick(product)}
          />
        </div>
      ))}
    </div>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCartItems, removeCartItem, updateCartItem } from "@/store/entities/carts";

import CartProduct from "@/components/CartProduct";

export default function Items() {
  const dispatch = useDispatch();
  const products = useSelector(getCartItems);

  const handleQtyChange = (product, qty) => {
    if (qty === 0) return dispatch(removeCartItem(product));

    dispatch(updateCartItem({ ...product, qty }));
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h4 className="fw-bold mb-4">Check Your Items</h4>

        {products.map((product) => (
          <CartProduct
            key={`_cart_list_item_${product.id}`}
            {...product}
            onUpdateQty={(qty) => handleQtyChange(product, qty)}
          />
        ))}
      </div>
    </div>
  );
}

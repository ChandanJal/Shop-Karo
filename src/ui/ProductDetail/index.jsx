import { useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { formateCurrency } from "@/utils/number-formater";

import { getCartItems, addCartItem } from "@/store/entities/carts";

import Table from "./Table";
import Actions from "./Actions";
import QuantityHandler from "./QuantityHandler";
import Pricing from "./Pricing";
import MainDetail from "./MainDetail";
import Images from "./Images";

export default function ProductDetailUI({ product }) {
  const [qty, setQty] = useState(1);

  const router = useRouter();
  const dispatch = useDispatch();
  const present = useSelector(getCartItems);

  const handleAddToCart = () => dispatch(addCartItem({ ...product, qty }));

  const handleViewCart = () => router.push("/cart");

  const index = present.findIndex((p) => p.id === product.id);

  return (
    <>
      <div className="container product-details">
        <div className="mt-5">
          <div className="row">
            <div className="col-md-6">
              <Images product={product} />
            </div>
            <div className="col-md-6">
              <div className="ms-md-4 mt-5 mt-md-0 mt-lg-0">
                <MainDetail product={product} />

                <hr />

                <Pricing price={formateCurrency(product.price)} />

                <hr />

                <QuantityHandler setQty={setQty} stock={product.stock} />
                <Actions index={index} onAddToCart={handleAddToCart} onViewCart={handleViewCart} />

                <hr />

                <Table product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

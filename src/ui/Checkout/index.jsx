import React from "react";
import { useSelector } from "react-redux";

import Header from "@/components/Header";
import { getCartItems } from "@/store/entities/carts";

import Items from "./Items";
import Summery from "./Summery";
import DeliveryInformation from "./DeliveryInformation";
import Payments from "./Payments";
import EmptyCart from "./EmptyCart";

export default function Checkout({ user }) {
  const products = useSelector(getCartItems);

  if (products.length === 0) return <EmptyCart />;

  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8 col-lg-8 mb-3">
            <Items />
            <Summery />
          </div>
          <div className="col-md-4 col-lg-4 mb-3">
            <DeliveryInformation user={user} />
            <Payments />
          </div>
        </div>
      </div>
    </>
  );
}

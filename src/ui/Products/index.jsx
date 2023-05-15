import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { fetchProducts, getProducts } from "@/store/entities/products";

import Categories from "./Categories";
import ItemsHeader from "./ItemsHeader";
import Products from "./Products";
import { useRouter } from "next/router";

export default function ProductsUI({ categories, data }) {
  const dispatch = useDispatch();
  const allProducts = useSelector(getProducts);
  const { query } = useRouter();

  const [sort, setSort] = useState({ path: "id", order: "asc" });

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("fetching data");
          dispatch(fetchProducts());
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) observer.observe(observerTarget.current);

    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, [observerTarget]);

  let items = allProducts;

  if (sort) items = _.orderBy(allProducts, [sort.path], [sort.order]);

  if (query.category) items = items.filter((i) => i.category === query.category);

  return (
    <>
      <div className="container">
        <div className="row mt-5 p-0">
          <div className="col-3">
            <Categories categories={categories} />
          </div>
          <div className="col-9">
            <ItemsHeader setSort={setSort} />
            <Products products={items} />
            <div ref={observerTarget} style={{ height: "1em" }}></div>

            <div>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quos numquam ad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

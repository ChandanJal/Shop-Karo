import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { useRouter } from "next/router";

import { fetchProducts, fetchProductsByCategory, getProducts, getProductsIsLoading } from "@/store/entities/products";

import InteractionObserver from "@/components/InteractionObserver";

import Categories from "./Categories";
import ItemsHeader from "./ItemsHeader";
import Products from "./Products";

export default function ProductsUI({ categories, data }) {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { category } = query;
  const allProducts = useSelector(getProducts);
  const isProductLoading = useSelector(getProductsIsLoading);

  const [sort, setSort] = useState();

  const handleFetch = () => {
    if (!category) dispatch(fetchProducts());
  };

  useEffect(() => {
    if (category && category !== "") {
      dispatch(fetchProductsByCategory(category));
    }
  }, [category]);

  let items = allProducts;

  if (sort) items = _.orderBy(allProducts, [sort.path], [sort.order]);

  if (category && category !== "") items = items.filter((i) => i.category === category);

  return (
    <>
      <div className="container">
        <div className="row mt-5 p-0">
          <div className="col-3">
            <Categories categories={categories} />
          </div>
          <div className="col-9">
            <ItemsHeader setSort={setSort} />

            <InteractionObserver onInteracted={handleFetch}>
              <Products products={items} />
            </InteractionObserver>

            {isProductLoading && (
              <div className="d-flex justify-content-center align-items-center mb-2">
                <div className="loading"></div>
              </div>
            )}

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

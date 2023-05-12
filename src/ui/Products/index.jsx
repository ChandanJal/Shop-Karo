import React, { useState } from "react";
import { useRouter } from "next/router";
import _ from "lodash";

import Categories from "./Categories";
import ItemsHeader from "./ItemsHeader";
import Products from "./Products";
import Pagination from "./Pagination";

const LIMIT = 8;

export default function ProductsUI({ categories, data }) {
  const { push, query } = useRouter();
  const [sort, setSort] = useState({ path: "id", order: "asc" });
  const { total, limit, skip, products } = data;

  const totalPages = Math.ceil(total / Math.max(limit, LIMIT));
  const currentPage = skip / Math.max(limit, LIMIT) + 1;

  const handlePageChange = (page) => {
    push({ pathname: "/products", query: { ...query, page } });
  };

  const handleNext = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  let items = products;
  if (sort) items = _.orderBy(products, [sort.path], [sort.order]);

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
            <Pagination
              totalItems={total}
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </div>
        </div>
      </div>
    </>
  );
}

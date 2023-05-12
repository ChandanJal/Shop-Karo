import React from "react";
import { useRouter } from "next/router";

import { formateCurrency } from "@/utils/number-formater";
import SearchItem from "./SearchItem";

export default function SearchContainer({ data, show }) {
  const { push } = useRouter();

  if (!show) return false;

  const handleProductClick = (id) => {
    push(`/products/${id}`);
  };

  return (
    <div className={"search-items-container"}>
      {data && data.products.length > 0 ? (
        data.products.map((product) => (
          <SearchItem
            key={`_search_product_item_${product.id}`}
            {...product}
            price={formateCurrency(product.price)}
            onClick={() => handleProductClick(product.id)}
          />
        ))
      ) : (
        <p className="m-0 text-center">{data && data.products.length === 0 ? "Nothing Found" : "Loading..."}</p>
      )}
    </div>
  );
}

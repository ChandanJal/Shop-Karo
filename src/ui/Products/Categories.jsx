import React from "react";
import { useRouter } from "next/router";
import { MdDelete } from "react-icons/md";

import { TextButton } from "@/components/common/Button";
import { RadioButton } from "@/components/Input";
import { capitalize } from "@/utils/text-helper";

export default function Categories({ categories }) {
  const { push, query } = useRouter();

  const handleCheck = (checked, category) => {
    if (checked) push({ pathname: "/products", query: { category } });
    else push("/products");
  };

  return (
    <div className="cart-container category-list">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold m-0">Categories</h4>
        <TextButton Icon={MdDelete} className="p-0" onClick={() => handleCheck(false)}>
          Clear All
        </TextButton>
      </div>
      {categories.map((category) => (
        <RadioButton
          key={`_filter_${category}`}
          label={capitalize(category).replaceAll("-", " ")}
          name="product_filter"
          checked={category === query.category}
          onChange={({ target }) => handleCheck(target.checked, category)}
        />
      ))}
    </div>
  );
}

import Dropdown from "@/components/Dropdown";
import { capitalize } from "@/utils/text-helper";
import { useRouter } from "next/router";
import React from "react";
import { BiSort } from "react-icons/bi";

const orderByList = [
  {
    path: "price",
    order: "desc",
    label: "High to Low",
  },
  {
    path: "price",
    order: "asc",
    label: "Low to High",
  },
  {
    path: "title",
    order: "asc",
    label: "A - Z",
  },
  {
    path: "title",
    order: "desc",
    label: "Z - A",
  },
];

export default function ItemsHeader({ setSort }) {
  const { query } = useRouter();

  return (
    <div className="d-flex justify-content-between align-items-center">
      <p>
        Showing <b>{query.category ? capitalize(query.category) : "All"}</b>{" "}
        Products
      </p>

      <Dropdown
        list={orderByList}
        Icon={BiSort}
        label="Order By"
        textField="label"
        onItemClick={setSort}
      />
    </div>
  );
}

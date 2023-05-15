import React from "react";

import { capitalize } from "@/utils/text-helper";

export default function Table({ product }) {
  return (
    <table className="table table-bordered">
      <tbody>
        {Object.keys(product).map((key) => {
          if (
            key === "id" ||
            key === "description" ||
            key === "discountPercentage" ||
            key === "images" ||
            key === "title" ||
            key === "thumbnail"
          )
            return false;
          else
            return (
              <tr key={key}>
                <th scope="row">{capitalize(key)}</th>
                <td>{product[key]}</td>
              </tr>
            );
        })}
      </tbody>
    </table>
  );
}

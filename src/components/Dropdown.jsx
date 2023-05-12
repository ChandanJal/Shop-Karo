import React, { useId } from "react";

import { generateRandomText } from "@/utils/id-helper";
import { TextButton } from "./common/Button";

export default function Dropdown({ list = [], Icon, onItemClick, label, textField }) {
  const id = generateRandomText();

  const handleItemClick = (index) => {
    if (onItemClick) onItemClick(list[index]);
  };

  return (
    <div className="dropdown dropdown-btn">
      <TextButton className="p-0" Icon={Icon} data-bs-toggle="dropdown" aria-expanded="false">
        {label}
      </TextButton>

      <ul className="dropdown-menu" aria-labelledby={id}>
        {list.map((item, index) => (
          <li key={`_dropdown_item_${index}`} onClick={() => handleItemClick(index)}>
            {textField ? item[textField] : item}
          </li>
        ))}
      </ul>
    </div>
  );
}

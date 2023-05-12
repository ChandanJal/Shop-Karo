import { useSelector } from "react-redux";

import { getCartItems } from "@/store/entities/carts";

export default function Counter() {
  const items = useSelector(getCartItems);

  if (items.length === 0) return false;

  return (
    <div className="counter">
      <span>{items.length}</span>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

export default function QuatityCounter({ initialQty = 0, onChangeCounter }) {
  const [count, setCount] = useState(initialQty);

  useEffect(() => {
    if (onChangeCounter) onChangeCounter(count);
  }, [count]);

  const handleChange = (e) => {
    const { value } = e.target;

    if (value === "") return setCount(1);

    if (isNaN(parseInt(value))) return;

    setCount(parseInt(value));
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="quatity-counter">
      <HiOutlinePlus onClick={handleIncrement} className="user-select-none" />
      <input type="text" onChange={handleChange} value={count} />
      <HiOutlineMinus onClick={handleDecrement} className="user-select-none" />
    </div>
  );
}

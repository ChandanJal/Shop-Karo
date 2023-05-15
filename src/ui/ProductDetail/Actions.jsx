import Button, { OutlineButton } from "@/components/common/Button";
import React from "react";

export default function Actions({ index, onAddToCart, onViewCart }) {
  return (
    <div className="d-flex align-items-center gap-3">
      <Button>Buy Now</Button>

      {index < 0 ? (
        <OutlineButton onClick={onAddToCart}>Add To Cart</OutlineButton>
      ) : (
        <OutlineButton onClick={onViewCart}>View On Cart</OutlineButton>
      )}
    </div>
  );
}

import Image from "next/image";

import Button from "../common/Button";

import { formateCurrency } from "@/utils/number-formater";

import styles from "./CartProductCard.module.css";

export default function CartProductCard({
  title,
  description,
  price,
  thumbnail,
  onClick,
  onRemoveItem,
}) {
  return (
    <div className={styles["card-product"]}>
      <div className={styles["img-container"]}>
        <Image src={thumbnail} fill alt={title} onClick={onClick} />
      </div>

      <div className={styles["content"]}>
        <div className={styles["top-content"]}>
          <p className={styles["name"]}>{title}</p>
          <p className={styles["price"]}>{formateCurrency(price)}</p>
        </div>
        <p className={styles["description"]}>{description}</p>

        <Button size="sm" className="btn-danger" onClick={onRemoveItem}>
          Remove Item
        </Button>
      </div>
    </div>
  );
}

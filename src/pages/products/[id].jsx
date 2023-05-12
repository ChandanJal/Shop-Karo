import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import Rating from "@/components/Rating";

import Button, { OutlineButton } from "@/components/common/Button";

import { formateCurrency } from "@/utils/number-formater";
import QuatityCounter from "@/components/QuatityCounter";
import { getCartItems, addCartItem } from "@/store/entities/carts";
import _ from "lodash";
import { capitalize } from "@/utils/text-helper";

export default function ProductDetail({ product }) {
  const [qty, setQty] = useState(1);
  const [thumbnail, setThumbnail] = useState("/assets/banner-1.png");
  const router = useRouter();
  const dispatch = useDispatch();
  const present = useSelector(getCartItems);

  const handleAddToCart = () => {
    dispatch(addCartItem({ ...product, qty }));
  };

  useEffect(() => {
    if (product) setThumbnail(product.thumbnail);
  }, [product]);

  const handleViewCart = () => router.push("/cart");

  const index = present.findIndex((p) => p.id === product.id);

  return (
    <>
      <div className="container product-details">
        <div className="mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="img-container">
                <Image src={thumbnail} fill alt={product.title} className="position-relative" />
              </div>

              <div className="options-img">
                {product.images.map((img) => (
                  <div key={img} className={`opt-img ${img === thumbnail ? "active" : ""}`}>
                    <Image src={img} fill alt="" className="position-relative" onClick={() => setThumbnail(img)} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div className="ms-md-4 mt-5 mt-md-0 mt-lg-0">
                <h2>{product.title}</h2>
                <p>{product.description}</p>

                <div className="d-flex align-items-center gap-2 mb-2">
                  <Rating rating={product.rating} />
                  <span>({product.stock})</span>
                </div>

                <hr />
                <h2>{formateCurrency(product.price)}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium consectetur ullam.</p>
                <hr />

                <div className="d-flex align-items-center gap-4 mb-3">
                  <QuatityCounter initialQty={1} onChangeCounter={setQty} />

                  <p className="m-0 fs-7">
                    Only {product.stock} Left ! <br />
                    Don&apos;t miss.{" "}
                  </p>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <Button>Buy Now</Button>

                  {index < 0 ? (
                    <OutlineButton onClick={handleAddToCart}>Add To Cart</OutlineButton>
                  ) : (
                    <OutlineButton onClick={handleViewCart}>View On Cart</OutlineButton>
                  )}
                </div>

                <hr />

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();

  const paths = _.range(1, data.total).map((i) => ({
    params: { id: i.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return { props: { product } };
}

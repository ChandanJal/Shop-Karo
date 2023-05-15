import Head from "next/head";
import _ from "lodash";

import ProductDetailUI from "@/ui/ProductDetail";

export default function ProductDetail({ product }) {
  return (
    <>
      <Head>
        <title>
          {product.title} With Great Sale | {product.brand}
        </title>

        <meta
          name="description"
          content={`Check out ${product.title} With Great Sale. You can react to us for any kind of advice.`}
          key="desc"
        />

        <meta name="og:description" content={product.description} />

        <meta name="og:image" content={product.thumbnail} />
      </Head>

      <ProductDetailUI product={product} />
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

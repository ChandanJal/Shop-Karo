import ProductsUI from "@/ui/Products";

export default function Products({ data, categories }) {
  return <ProductsUI categories={categories} data={data} />;
}

export async function getServerSideProps(context) {
  const limit = 8;
  const { category, page } = context.query;

  const req1 = fetch("https://dummyjson.com/products/categories");
  let req2 = fetch(`https://dummyjson.com/products?limit=8&skip=${page ? limit * (parseInt(page) - 1) : 0}`);

  if (category) req2 = await fetch(`https://dummyjson.com/products/category/${category}`);

  const allData = await Promise.all([req1, req2]);
  const [categories, data] = await Promise.all([allData[0].json(), allData[1].json()]);

  return { props: { data, categories } };
}

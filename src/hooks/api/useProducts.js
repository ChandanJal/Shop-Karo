import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useProducts(category) {
  const { data, error, isLoading } = useSWR(
    category
      ? `https://dummyjson.com/products/category/${category}`
      : "https://dummyjson.com/products",
    fetcher
  );

  async function fetchProductById(id) {}

  return { data, error, isLoading };
}

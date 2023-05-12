import useSWR from "swr";

const ENDPOINT = `${process.env.NEXT_APP_ENDPOINT}/products/categories`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useCategories() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products/categories",
    fetcher
  );

  return { data, error, isLoading };
}

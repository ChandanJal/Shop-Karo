import { useEffect, useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";

import SearchContainer from "./SearchContainer";
import useOutsideClick from "@/hooks/useOutsideClick";

export default function Search() {
  const ref = useRef();
  const [query, setQuery] = useState("");
  const [data, setData] = useState();
  const { show, setShow } = useOutsideClick(ref);

  const fetchProducts = () => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then(setData);
  };

  useEffect(() => {
    if (query !== "") {
      fetchProducts();
      setShow(true);
    } else {
      setData();
      setShow(false);
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-view" ref={ref}>
      <form className="search-item" role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Product"
          aria-label="Search"
          onChange={handleChange}
        />
        <FiSearch />
      </form>

      <SearchContainer data={data} show={show} />
    </div>
  );
}

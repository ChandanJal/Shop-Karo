import { createSlice } from "@reduxjs/toolkit";

const _LIMIT = 8;

const initialState = {
  total: null,
  limit: null,
  skip: null,
  products: [],

  loading: false,
  error: null,

  page: 1,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productLoadRequested: (state, action) => {
      state.loading = true;
    },

    productLoadRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    productLoaded: (state, action) => {
      state.total = action.payload.total;
      state.limit = action.payload.limit;
      state.skip = action.payload.skip;

      const oldProducts = state.products;
      oldProducts.push(...action.payload.products);
      state.products = oldProducts;

      state.loading = false;
      state.error = null;
    },

    productPageIncreased: (state, action) => {
      state.page++;
    },
  },
});

const { productLoaded, productLoadRequestFailed, productLoadRequested, productPageIncreased } = slice.actions;
export default slice.reducer;

// use thunk here
export const fetchProducts = () => async (dispatch, getState) => {
  const { page, total, skip, limit } = getState().entities.products;

  // check whether it is last page
  // if it is last page then there is no need to make any request
  if (total !== null) {
    const totalPages = Math.ceil(total / Math.max(limit, _LIMIT));
    const currentPage = skip / Math.max(limit, _LIMIT) + 1;

    if (currentPage >= totalPages) return;
  }

  try {
    dispatch(productLoadRequested());

    const res = await fetch(`https://dummyjson.com/products?limit=8&skip=${page ? _LIMIT * (parseInt(page) - 1) : 0}`);
    const data = await res.json();

    dispatch(productLoaded(data));

    dispatch(productPageIncreased());
  } catch (e) {
    dispatch(productLoadRequestFailed());
  }
};

export const getProducts = (state) => state.entities.products.products;

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
    productsLoadRequested: (state, action) => {
      state.loading = true;
    },

    productsLoadRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    productsLoaded: (state, action) => {
      state.total = action.payload.total;
      state.limit = action.payload.limit;
      state.skip = action.payload.skip;

      const oldProducts = state.products;

      const set = new Set(state.products.map((p) => p.id));
      action.payload.products.forEach((p) => {
        if (!set.has(p.id)) oldProducts.push(p);
      });

      state.products = oldProducts;

      state.loading = false;
      state.error = null;
    },

    productsLoadedWithCategory: (state, action) => {
      const newProducts = action.payload;
      const set = new Set(state.products.map((p) => p.id));

      newProducts.map((p) => {
        if (!set.has(p.id)) state.products.push(p);
      });

      state.loading = false;
    },

    productsPageIncreased: (state, action) => {
      state.page++;
    },

    productsReset: (state, action) => {
      return initialState;
    },
  },
});

const {
  productsLoadRequestFailed,
  productsLoadRequested,
  productsLoaded,
  productsPageIncreased,
  productsReset,
  productsLoadedWithCategory,
} = slice.actions;
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
    dispatch(productsLoadRequested());

    const res = await fetch(`https://dummyjson.com/products?limit=8&skip=${page ? _LIMIT * (parseInt(page) - 1) : 0}`);
    const data = await res.json();

    dispatch(productsLoaded(data));

    dispatch(productsPageIncreased());
  } catch (e) {
    dispatch(productsLoadRequestFailed());
  }
};

export const fetchProductsByCategory = (category) => async (dispatch, getState) => {
  try {
    dispatch(productsLoadRequested());

    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await res.json();

    dispatch(productsLoadedWithCategory(data.products));
  } catch (e) {
    dispatch(productsLoadRequestFailed(e));
  }
};

export const getProducts = (state) => state.entities.products.products;

export const getProductsIsLoading = (state) => state.entities.products.loading;

export const resetProcuts = (payload) => productsReset(payload);

export const addProducts = (data) => productsLoaded(data);

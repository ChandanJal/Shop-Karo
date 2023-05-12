import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    cartAdded: (state, action) => {
      state.push(action.payload);
    },

    cartUpdated: (state, action) => {
      const index = state.findIndex((i) => i.id === action.payload.id);
      if (index > -1) state[index] = action.payload;
    },

    cartRemoved: (state, action) => {
      return state.filter((s) => s.id !== action.payload.id);
    },
  },
});

const { cartAdded, cartRemoved, cartUpdated } = slice.actions;
export default slice.reducer;

// Selectors are here
export const getCartItems = (state) => state.entities.carts;

// Actions are here
export const addCartItem = (item) => cartAdded(item);

export const updateCartItem = (item) => cartUpdated(item);

export const removeCartItem = (item) => cartRemoved(item);

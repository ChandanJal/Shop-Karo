import { createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    favoriteAdded: (state, action) => {
      state.push(action.payload);
    },

    favoriteRemoved: (state, action) => {
      return state.filter((s) => s.id !== action.payload.id);
    },

    favoriteCleared: (state, action) => {
      return [];
    },
  },
});

export default slice.reducer;
const { favoriteAdded, favoriteRemoved, favoriteCleared } = slice.actions;

// Selectors are here
export const getFavorites = (state) => state.entities.favorites;

export const addFavorite = (item) => favoriteAdded(item);

export const removeFavorite = (item) => favoriteRemoved(item);

export const clearAllFavorites = () => favoriteCleared();

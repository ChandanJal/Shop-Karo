import { combineReducers } from "redux";

import carts from "./carts";
import favorites from "./favorites";
import products from "./products";

export default combineReducers({
  carts: carts,
  favorites: favorites,
  products: products,
});

import { combineReducers } from "redux";

import carts from "./carts";
import favorites from "./favorites";

export default combineReducers({
  carts: carts,
  favorites: favorites,
});

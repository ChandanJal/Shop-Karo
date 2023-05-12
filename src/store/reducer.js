import { combineReducers } from "@reduxjs/toolkit";

import entities from "./entities/entities";

const appReducer = (state, action) => {
  if (action.type === "SIGN_OUT") {
    state = [];
  }

  return reducer(state, action);
};

const reducer = combineReducers({
  entities,
});

export default appReducer;

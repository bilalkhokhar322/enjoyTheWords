import { thunk } from "redux-thunk";
import userSlice from "./features/User/userSlice.js";
import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userSlice,
});

export const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk)
);

export default store;

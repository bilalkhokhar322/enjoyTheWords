import { thunk } from "redux-thunk";
import userSlice from "./features/User/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
  { reducer: persistedReducer },
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);

// export default store;

// import { combineReducers } from "redux";

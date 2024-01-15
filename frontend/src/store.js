/**
 * Redux store configuration.
 *
 * @module store
 */

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import  cartSliceReducer  from "./slices/cartSlice";

/**
 * The Redux store instance.
 *
 * @type {Object}
 * @property {Function} reducer - The root reducer for the store.
 * @property {Function} middleware - The middleware for the store.
 * @property {boolean} devTools - Whether to enable Redux DevTools.
 */
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart : cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

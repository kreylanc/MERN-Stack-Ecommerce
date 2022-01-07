import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/productSlice";
import singleProductReducer from "../feature/singleProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    singleProduct: singleProductReducer,
  },
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HTTP_STATUS } from "../app/constants";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    //  destructuring the object and getting the data value
    const { data } = await axios.get("/api/products");

    return data;
  }
);

//  Slice for all the producst from the API
const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = HTTP_STATUS.PENDING;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export const selectData = (state) => state.products.data;
export const selectStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;

export default productSlice.reducer;
// export default singleProductSlice.reducer;

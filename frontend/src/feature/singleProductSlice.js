import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HTTP_STATUS } from "../app/constants";

//  Fetch a specific product detail
export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id) => {
    const { data } = await axios.get(`/api/products/${id}`);

    return data;
  }
);

//  Slice to handle only the single product details
const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [getSingleProduct.pending]: (state) => {
      state.status = HTTP_STATUS.PENDING;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.status = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.status = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export const selectData = (state) => state.singleProduct.data;
export const selectStatus = (state) => state.singleProduct.status;
export const selectError = (state) => state.singleProduct.error;

export default singleProductSlice.reducer;

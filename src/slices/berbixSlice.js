import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  datas: [],
};

export const berbixdataFetch = createAsyncThunk(
  "products/berbixdataFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/berbix`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);




const berbixdataSlice = createSlice({
  name: "berbixdata",
  initialState,
  reducers: {},
  extraReducers: {
    [berbixdataFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [berbixdataFetch.fulfilled]: (state, action) => {
      state.datas = action.payload;
      state.status = "success";
    },
    [berbixdataFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default berbixdataSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  sellerOffer: [],
  status: null,
  createStatus: null,
  editStatus: null,
  deleteStatus: null,
};

export const sellerOfferFetch = createAsyncThunk(
  "sellerOrder/sellerOfferFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/sellerOrder`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const sellerOfferCreate = createAsyncThunk(
  "sellerOrder/sellerOfferCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/sellerOrder`,
        values,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data, {
        position: "bottom-left",
      });
    }
  }
);


export const sellerOrderEdit = createAsyncThunk(
  "sellerOrder/sellerOrderEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/sellerOrder/${values.sellerOrder._id}`,
        values,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data, {
        position: "bottom-left",
      });
    }
  }
);

export const selllerOrderDelete = createAsyncThunk(
  "selllerOrder/selllerOrderDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/sellerOrder/${id}`,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response?.data, {
        position: "bottom-left",
      });
    }
  }
);



const sellersSlice = createSlice({
  name: "sellerOffer",
  initialState,
  reducers: {},
  extraReducers: {
    [sellerOfferFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [sellerOfferFetch.fulfilled]: (state, action) => {
      state.sellerOffer = action.payload;
      state.status = "success";
    },
    [sellerOfferFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [sellerOfferCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [sellerOfferCreate.fulfilled]: (state, action) => {
      state.sellerOffer.push(action.payload);
      state.createStatus = "success";
      toast.success("sellerOffer Created!", {
        position: "bottom-left",
      });
    },
    [sellerOfferCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [sellerOrderEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [sellerOrderEdit.fulfilled]: (state, action) => {
      const updatedProducties = state.sellerOffer.map((sellers) =>
      sellers._id === action.payload._id ? action.payload : sellers
      );
      state.sellerOffer = updatedProducties;
      state.editStatus = "success";
      toast.info("seller offer  Edited", {
        position: "bottom-left",
      });
    },
    [sellerOrderEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [selllerOrderDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [selllerOrderDelete.fulfilled]: (state, action) => {
      const newList = state.sellerOffer.filter(
        (item) => item._id !== action.payload._id
      );
      state.sellerOffer = newList;
      state.deleteStatus = "success";
      toast.error("seller Offer  Deleted!", {
        position: "bottom-left",
      });
    },
    [selllerOrderDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});


export const sellersOrderReducer = sellersSlice.reducer;
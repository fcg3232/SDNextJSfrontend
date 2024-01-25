import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  buyerOffer: [],
  status: null,
  createStatus: null,
  editStatus: null,
  deleteStatus: null,
};

export const buyerOfferFetch = createAsyncThunk(
  "buyerOrder/buyerOfferFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/buyerOrder`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const buyerOfferCreate = createAsyncThunk(
  "buyerOrder/buyerOfferCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/buyerOrder`,
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


export const buyerOrderEdit = createAsyncThunk(
  "buyerOrder/buyerOrderEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/buyerOrder/${values.buyerOrder._id}`,
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

export const buyerOrderDelete = createAsyncThunk(
  "buyerOrder/buyerOrderDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/buyerOrder/${id}`,
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



const buyersSlice = createSlice({
  name: "buyerOffer",
  initialState,
  reducers: {},
  extraReducers: {
    [buyerOfferFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [buyerOfferFetch.fulfilled]: (state, action) => {
      state.buyerOffer = action.payload;
      state.status = "success";
    },
    [buyerOfferFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [buyerOfferCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [buyerOfferCreate.fulfilled]: (state, action) => {
      state.buyerOffer.push(action.payload);
      state.createStatus = "success";
      toast.success("buyerOffer Created!", {
        position: "bottom-left",
      });
    },
    [buyerOfferCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [buyerOrderEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [buyerOrderEdit.fulfilled]: (state, action) => {
      const updatedProducties = state.buyerOffer.map((buyers) =>
      buyers._id === action.payload._id ? action.payload : buyers
      );
      state.buyerOffer = updatedProducties;
      state.editStatus = "success";
      toast.info("buyers  Edited", {
        position: "bottom-left",
      });
    },
    [buyerOrderEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [buyerOrderDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [buyerOrderDelete.fulfilled]: (state, action) => {
      const newList = state.buyerOffer.filter(
        (item) => item._id !== action.payload._id
      );
      state.buyerOffer = newList;
      state.deleteStatus = "success";
      toast.error("buyerOffer  Deleted!", {
        position: "bottom-left",
      });
    },
    [buyerOrderDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});


export const buyerOrderReducer = buyersSlice.reducer;
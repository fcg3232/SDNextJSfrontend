import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  limitOrderOffer: [],
  UserLimitOrder:[],
  status: null,
  createStatus: null,
  editStatus: null,
  deleteStatus: null,
};

export const limitOrderOfferFetch = createAsyncThunk(
  "orderMatching/limitOrderOfferFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/orderMatching`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const limitOrderOfferCreate = createAsyncThunk(
  "orderMatching/limitOrderOfferCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/orderMatching`,
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

// export const UserlimitOrder = createAsyncThunk("orderMatching/UserlimitOrder", async (id) => {
//   try {
//     const response = await axios.get(`${url}/orderMatching/findOrder/${id}`, setHeaders());
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });



export const limitOrderOfferEdit = createAsyncThunk(
  "orderMatching/limitOrderOfferEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/orderMatching/${values.orderMatching._id}`,
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

export const limitOrderOfferDelete = createAsyncThunk(
  "orderMatching/limitOrderOfferDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/orderMatching/${id}`,
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



const limitOrderOfferSlice = createSlice({
  name: "orderMatching",
  initialState,
  reducers: {},
  extraReducers: {
    [limitOrderOfferFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [limitOrderOfferFetch.fulfilled]: (state, action) => {
      state.limitOrderOffer = action.payload;
      state.status = "success";
    },
    [limitOrderOfferFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    // [UserlimitOrder.pending]: (state, action) => {
    //   state.status = "pending";
    // },
    // [UserlimitOrder.fulfilled]: (state, action) => {
    //   state.UserLimitOrder = action.payload;
    //   state.status = "success";
    // },
    // [UserlimitOrder.rejected]: (state, action) => {
    //   state.status = "rejected";
    // },

    [limitOrderOfferCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [limitOrderOfferCreate.fulfilled]: (state, action) => {
      state.limitOrderOffer.push(action.payload);
      state.createStatus = "success";
      toast.success("limit OrderOffer Created!", {
        position: "bottom-left",
      });
    },
    [limitOrderOfferCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";

    },
    [limitOrderOfferEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [limitOrderOfferEdit.fulfilled]: (state, action) => {
      const updatedProducties = state.limitOrderOffer.map((offer) =>
      offer._id === action.payload._id ? action.payload : offer
      );
      state.limitOrderOffer = updatedProducties;
      state.editStatus = "success";
      toast.info("limit Order Offer  Edited", {
        position: "bottom-left",
      });
    },
    [limitOrderOfferEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [limitOrderOfferDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [limitOrderOfferDelete.fulfilled]: (state, action) => {
      const newList = state.limitOrderOffer.filter(
        (item) => item._id !== action.payload._id
      );
      state.limitOrderOffer = newList;
      state.deleteStatus = "success";
      toast.error("limit Order Offer  Deleted!", {
        position: "bottom-left",
      });
    },
    [limitOrderOfferDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});


export const limitOrderOfferReducer = limitOrderOfferSlice.reducer;
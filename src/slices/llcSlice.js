import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const propertyLLCFetch = createAsyncThunk(
  "propLLC/propertyLLCFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/propLLC`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const propertyLLCCreate = createAsyncThunk(
  "propLLC/propertyLLCCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/propLLC`,
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


export const propertyLLCEdit = createAsyncThunk(
  "propLLC/propertyLLCEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/propLLC/${values.LLC._id}`,
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

export const propertyLLCDelete = createAsyncThunk(
  "propLLC/propertyLLCDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/propLLC/${id}`,
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



const propertyLLCSlice = createSlice({
  name: "propLLC",
  initialState,
  reducers: {},
  extraReducers: {
    [propertyLLCFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [propertyLLCFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [propertyLLCFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [propertyLLCCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [propertyLLCCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Property LLC Created!", {
        position: "bottom-left",
      });
    },
    [propertyLLCCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [propertyLLCEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [propertyLLCEdit.fulfilled]: (state, action) => {
      const updatedProducties = state.items.map((property) =>
      property._id === action.payload._id ? action.payload : property
      );
      state.items = updatedProducties;
      state.editStatus = "success";
      toast.info("Property LLC  Edited", {
        position: "bottom-left",
      });
    },
    [propertyLLCEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [propertyLLCDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [propertyLLCDelete.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("Property LLC  Deleted!", {
        position: "bottom-left",
      });
    },
    [propertyLLCDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});

export default propertyLLCSlice.reducer;
// export default personalSlice.reducer;

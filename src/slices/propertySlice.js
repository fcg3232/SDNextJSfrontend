import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const propertyFetch = createAsyncThunk(
  "propertiesdb/propertyFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/propertiesdb`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const properyCreate = createAsyncThunk(
  "propertiesdb/properyCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/propertiesdb`,
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


export const propertyEdit = createAsyncThunk(
  "propertiesdb/propertyEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/propertiesdb/${values.propertydb._id}`,
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

export const propertyDelete = createAsyncThunk(
  "propertiesdb/propertyDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/propertiesdb/${id}`,
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



const propertySlice = createSlice({
  name: "propertiesdb",
  initialState,
  reducers: {},
  extraReducers: {
    [propertyFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [propertyFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [propertyFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [properyCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [properyCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Property Created!", {
        position: "bottom-left",
      });
    },
    [properyCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [propertyEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [propertyEdit.fulfilled]: (state, action) => {
      const updatedProducties = state.items.map((property) =>
      property._id === action.payload._id ? action.payload : property
      );
      state.items = updatedProducties;
      state.editStatus = "success";
      toast.info("Property  Edited", {
        position: "bottom-left",
      });
    },
    [propertyEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [propertyDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [propertyDelete.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("Property  Deleted!", {
        position: "bottom-left",
      });
    },
    [propertyDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});

export default propertySlice.reducer;
// export default personalSlice.reducer;

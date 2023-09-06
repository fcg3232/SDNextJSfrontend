import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const personalFetch = createAsyncThunk(
  "personaldb/personalFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/personaldb`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const personalCreate = createAsyncThunk(
  "personaldb/personalCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/personaldb`,
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


export const personalEdit = createAsyncThunk(
  "personaldb/personalEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/personaldb/${values.personal._id}`,
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

export const personalDelete = createAsyncThunk(
  "personaldb/personalDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/personaldb/${id}`,
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



const personalSlice = createSlice({
  name: "personaldb",
  initialState,
  reducers: {},
  extraReducers: {
    [personalFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [personalFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [personalFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [personalCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [personalCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Personal DB Created!", {
        position: "bottom-left",
      });
    },
    [personalCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [personalEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [personalEdit.fulfilled]: (state, action) => {
      const updatedProducties = state.items.map((property) =>
      property._id === action.payload._id ? action.payload : property
      );
      state.items = updatedProducties;
      state.editStatus = "success";
      toast.info("Personal DB Edited", {
        position: "bottom-left",
      });
    },
    [personalEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [personalDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [personalDelete.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("Personal DB Deleted!", {
        position: "bottom-left",
      });
    },
    [personalDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});

// export default propertiesSlice.reducer;
export default personalSlice.reducer;

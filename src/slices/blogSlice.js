import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  blogs: [],
  status: null,
  createStatus: null,
  editStatus: null,
  deleteStatus: null,
};

export const blogFetch = createAsyncThunk(
  "blogdb/blogFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/blogdb`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const blogCreate = createAsyncThunk(
  "blogdb/blogCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/blogdb`,
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

export const fileUpload = createAsyncThunk(
  "upload/fileUpload",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/upload`,
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


export const blogEdit = createAsyncThunk(
  "blogdb/blogEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/blogdb/${values.Blog._id}`,
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

export const blogDelete = createAsyncThunk(
  "blogdb/blogDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/blogdb/${id}`,
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



const blogSlice = createSlice({
  name: "blogdb",
  initialState,
  reducers: {},
  extraReducers: {
    [blogFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [blogFetch.fulfilled]: (state, action) => {
      state.blogs = action.payload;
      state.status = "success";
    },
    [blogFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [blogCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [blogCreate.fulfilled]: (state, action) => {
      state.blogs.push(action.payload);
      state.createStatus = "success";
      toast.success("blog Created!", {
        position: "bottom-left",
      });
    },
    [blogCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [blogEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [blogEdit.fulfilled]: (state, action) => {
      const updatedProducties = state.blogs.map((blog) =>
      blog._id === action.payload._id ? action.payload : blog
      );
      state.blogs = updatedProducties;
      state.editStatus = "success";
      toast.info("blog  Edited", {
        position: "bottom-left",
      });
    },
    [blogEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [blogDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [blogDelete.fulfilled]: (state, action) => {
      const newList = state.blogs.filter(
        (item) => item._id !== action.payload._id
      );
      state.blogs = newList;
      state.deleteStatus = "success";
      toast.error("blog  Deleted!", {
        position: "bottom-left",
      });
    },
    [blogDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});

// export default blogSlice.reducer;
export const blogdbReducer = blogSlice.reducer;







// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { url, setHeaders } from "./api";
// import { toast } from "react-toastify";

// const initialState = {
//   blogs: [],
//   status: null,
//   createStatus: null,
//   editStatus: null,
//   deleteStatus: null,
// };

// export const productsFetch = createAsyncThunk(
//   "products/productsFetch",
//   async () => {
//     try {
//       const response = await axios.get(`${url}/products`);

//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const productsCreate = createAsyncThunk(
//   "products/productsCreate",
//   async (values) => {
//     try {
//       const response = await axios.post(
//         `${url}/products`,
//         values,
//         setHeaders()
//       );

//       return response.data;
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data, {
//         position: "bottom-left",
//       });
//     }
//   }
// );

// export const productsEdit = createAsyncThunk(
//   "products/productsEdit",
//   async (values) => {
//     try {
//       const response = await axios.put(
//         `${url}/products/${values.product._id}`,
//         values,
//         setHeaders()
//       );

//       return response.data;
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data, {
//         position: "bottom-left",
//       });
//     }
//   }
// );

// export const productDelete = createAsyncThunk(
//   "products/productDelete",
//   async (id) => {
//     try {
//       const response = await axios.delete(
//         `${url}/products/${id}`,
//         setHeaders()
//       );

//       return response.data;
//     } catch (error) {
//       console.log(error.response.data);
//       toast.error(error.response?.data, {
//         position: "bottom-left",
//       });
//     }
//   }
// );

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [productsFetch.pending]: (state, action) => {
//       state.status = "pending";
//     },
//     [productsFetch.fulfilled]: (state, action) => {
//       state.blogs = action.payload;
//       state.status = "success";
//     },
//     [productsFetch.rejected]: (state, action) => {
//       state.status = "rejected";
//     },
//     [productsCreate.pending]: (state, action) => {
//       state.createStatus = "pending";
//     },
//     [productsCreate.fulfilled]: (state, action) => {
//       state.blogs.push(action.payload);
//       state.createStatus = "success";
//       toast.success("Product Created!", {
//         position: "bottom-left",
//       });
//     },
//     [productsCreate.rejected]: (state, action) => {
//       state.createStatus = "rejected";
//     },
//     [productDelete.pending]: (state, action) => {
//       state.deleteStatus = "pending";
//     },
//     [productDelete.fulfilled]: (state, action) => {
//       const newList = state.blogs.filter(
//         (item) => item._id !== action.payload._id
//       );
//       state.blogs = newList;
//       state.deleteStatus = "success";
//       toast.error("Product Deleted!", {
//         position: "bottom-left",
//       });
//     },
//     [productDelete.rejected]: (state, action) => {
//       state.deleteStatus = "rejected";
//     },
//     [productsEdit.pending]: (state, action) => {
//       state.editStatus = "pending";
//     },
//     [productsEdit.fulfilled]: (state, action) => {
//       const updatedProducts = state.blogs.map((product) =>
//         product._id === action.payload._id ? action.payload : product
//       );
//       state.blogs = updatedProducts;
//       state.editStatus = "success";
//       toast.info("Product Edited", {
//         position: "bottom-left",
//       });
//     },
//     [productsEdit.rejected]: (state, action) => {
//       state.editStatus = "rejected";
//     },
//   },
// });

// export default productsSlice.reducer;

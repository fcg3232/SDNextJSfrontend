// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//     verificationResponse: null,
//     error: null,
//     status: 'idle',
//   };

// export const verifyCandidate = createAsyncThunk(
//   'verify/verifyCandidate',
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await axios.get('https://kyc-api.amlbot.com/verifications/b12a4778078bf74eb339c0e15cc537e308e8', {
//         headers: {
//           'Accept': 'application/json',
//           'form-token': 'e0368ffe0b0cd7468e3b6e515653702a0bc4',
//         }
//       });
// console.log(res, 'verify response');

//       return res.data;
//     } catch (error) {
//       console.error('Error fetching candidate verification:', error);
//       return rejectWithValue(error.response ? error.response.data : error.message);
//     }
//   }
// );

// console.log('data', verifyCandidate)

// const verifySlice = createSlice({
//   name: 'verify',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(verifyCandidate.fulfilled, (state, action) => {
//         console.log("addCase ~ action:", action)
//         state.verificationResponse = action.payload;
//         state.error = null;
//       })
//       .addCase(verifyCandidate.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(verifyCandidate.rejected, (state, action) => {
//         state.verificationResponse = null;
//         state.error = action.payload;
//       });
//   },
// });

// export default verifySlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  verificationResponse: null,
  error: null,
  status: "idle",
};

export const verifyCandidate = createAsyncThunk(
  "verify/verifyCandidate",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://kyc-api.amlbot.com/verifications/a61c4d2f09c2e84902194241af94758e11a4",
        {
          headers: {
            Accept: "application/json",
            "form-token": "e0368ffe0b0cd7468e3b6e515653702a0bc4",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.error("Error fetching candidate verification:", error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const verifySlice = createSlice({
  name: "verify",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyCandidate.fulfilled, (state, action) => {
        state.verificationResponse = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(verifyCandidate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyCandidate.rejected, (state, action) => {
        state.verificationResponse = null;
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default verifySlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  formResponse: null,
  status: 'idle',
  error: null,
};

export const fetchCandidateId = createAsyncThunk(
  'form/fetchCandidateId',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://kyc-api.amlbot.com/forms/8b32344e08c0454c312878540ce69ba5892c/urls',
        {
          external_applicant_id: 'e0368ffe0b0cd7468e3b6e515653702a0bc4',
        },
        {
          headers: {
            Authorization: 'Token e31169640d9147493929ab77c9128470b16d',
            'Content-Type': 'application/json',
          }
        }
      );
      console.log("Response:", response); 
      return response.data;
    } catch (error) {
      console.error("Error:", error); 
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
         return rejectWithValue(error.request);
      } else {
         return rejectWithValue(error.message);
      }
    }
  }
);


const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandidateId.fulfilled, (state, action) => {
        console.log("🚀 ~ .addCase ~ action:", action)
        state.formResponse = action.payload;
        state.error = null;
      })
      .addCase(fetchCandidateId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCandidateId.rejected, (state, action) => {
        state.formResponse = null;
        state.error = action.payload;
      });
  },
});

export default formSlice.reducer;
